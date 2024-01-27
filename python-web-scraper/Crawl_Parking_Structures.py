'''
Author: Toby Chow
Description: Crawls UTD Auxiliary Service's Parking information page
'''

import urllib3
import certifi
import datetime
from bs4 import BeautifulSoup
from bson import ObjectId

from Parking_Structure import Parking_Structure
from Parking_Structure import Permit


class CrawlRoot:
    def __init__(self):
        self.psList = []

    # finds parking options and available Spaces of parking structure
    # returns dictionary of available space and level+color
    # param:
    #   soup is the beautiful soup return
    #   parking_structure_name is string representation of parkign structure. EX: 'ps1' 'ps3' 'ps4'
    def parse_parking(self, soup, parking_structure_name):
        # build parking structure object
        psBuilder = Parking_Structure(parking_structure_name)
        for element in soup.findAll('table', {'id': parking_structure_name}):
            body = element.find('tbody')
            # finds each row for parking
            for row in body.findAll('tr'):
                cells = row.findAll("td")
                # parse info into variables

                # level
                level = cells[0].text
                # permit type
                # cells[1].text.rsplit(' ', 1)[0].lower()
                option = cells[1].text
                # available space
                spots = cells[2].text

                # build permit
                permit = Permit(option, level, spots)

                # build parking structure object
                psBuilder.permit.append(permit)
        # empty here
        # add built ps to list of parking structures
        self.psList.append(psBuilder)

    # print all parking structures in psList
    # for debugging
    def printParkingStructureData(self):
        for ps in self.psList:
            print(ps.structure + ': ')
            for permit in ps.permit:
                print(permit.color + ", " +
                      str(permit.level) + ", " + str(permit.spots))

    # create json format for mongoDB
    # returns array of JSONs to send to mongoDB
    def buildJSONFormat(self):
        jsonArr = []
        for ps in self.psList:
            currentJson = {"structure": ps.structure,
                           "utc_time_updated": datetime.datetime.utcnow(), "permit_category": []}
            permit_category_lis = []
            for permit in ps.permit: # bottle neck here??
                permit_obj = {"id": ObjectId(), "color": permit.color, "level": permit.level, "spots": permit.spots}
                permit_category_lis.append(permit_obj)
            currentJson["permit_category"] = permit_category_lis
            jsonArr.append(currentJson)
        return jsonArr

    # create TEST json format for mongoDB
    # returns TESTarray of JSONs to send to mongoDB
    # NEEDS REFACTORING
    def buildJSONTestFormat(self):
        jsonArr = []
        for ps in self.psList:
            currentJson = {"structure": ps.structure, "utc_time_updated": datetime.datetime.utcnow(),
                           "permit_category": []}
            permit_category_lis = []
            for permit in ps.permit:
                permit_category_lis.append(
                    {"id": ObjectId(), "color": permit.color, "level": permit.level, "spots": 0})
            currentJson["permit_category"] = permit_category_lis
            jsonArr.append(currentJson)
        return jsonArr

    # general function for invoking HTML parse
    # placeholder function for lambda invocation
    def find_parking(self):
        http = urllib3.PoolManager(
            cert_reqs='CERT_REQUIRED', ca_certs=certifi.where())
        url_php = "https://services.utdallas.edu/transit/garages/_code.php"
        response = http.request('GET', url_php)
        soup = BeautifulSoup(response.data, features="html.parser")
        # modular for more parking structures
        self.parse_parking(soup, 'ps1')
        self.parse_parking(soup, 'ps3')
        self.parse_parking(soup, 'ps4')
        self.printParkingStructureData()
