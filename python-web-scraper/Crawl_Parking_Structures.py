'''
Author: Toby Chow
Description: Crawls UTD Auxiliary Service's Parking information page
'''

import urllib3
import certifi
from bs4 import BeautifulSoup
from Parking_Structure import Parking_Structure
from Permit import Permit


class CrawlRoot:
    def __init__(self):
        # example: {"purple": {"parking structure 1": {"0": {"level": "5", "spots": "2"}, "1": {"level": "3", "spots": "1"}} , "parking structure 3": "10","parking structure 4": "6"}}
        self.intent_dict = {
            "purple": {},
            "orange": {},
            "gold": {},
            "green": {},
            "grey": {},
            "pay-by-space": {}
        }

        self.parking_json = {
        }
        self.psList = []
        # mapped values as template for dict
        self.parking_dict = {
            "ps1": "parking structure 1",
            "ps3": "parking structure 3",
            "ps4": "parking structure 4"
        }

    # finds parking options and available Spaces of parking structure
    # returns dictionary of available space and level+color
    # param:
    #   soup is the beautiful soup return
    #   park_struc is string representation of parkign structure. EX: 'ps1' 'ps3' 'ps4'
    def parse_parking(self, soup, park_struc):
        # build parking structure object
        psBuilder = Parking_Structure(park_struc)

        for element in soup.findAll('table', {'id': park_struc}):
            body = element.find('tbody')
            # finds each row for parking
            for row in body.findAll('tr'):
                cells = row.findAll("td")

                ## parse info into variables

                # level
                level = cells[0].text
                # permit type
                option = cells[1].text # cells[1].text.rsplit(' ', 1)[0].lower()
                # available space
                spots = cells[2].text


                # build permit
                permit = Permit(option, level, spots)

                # build parking structure object
                psBuilder.permit.append(permit)

        # add built ps to list of parking structures
        self.psList.append(psBuilder)

    # print all parkign structures in psList
    def printParkingStructureData(self):
        for ps in self.psList:
            for permit in ps.permit:
                print(ps.structure + ", " + permit.color + ", " + str(permit.level) + ", " + str(permit.spots))

    # general function for invoking HTML parse
    # placeholder function for lambda invocation
    def find_parking(self):
        http = urllib3.PoolManager(cert_reqs='CERT_REQUIRED', ca_certs=certifi.where())
        url_php = "https://www.utdallas.edu/services/transit/garages/_code.php"
        response = http.request('GET', url_php)
        soup = BeautifulSoup(response.data, features="html.parser")
        # modular for more parking structures
        self.parse_parking(soup, 'ps1')
        self.parse_parking(soup, 'ps3')
        self.parse_parking(soup, 'ps4')