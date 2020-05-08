'''
Author: Toby Chow, Jin Liu, Richard Lin
Description: Crawls UTD Auxiliary Service's Parking information page for Amazon Alexa Skill
'''

import urllib3
import certifi
from bs4 import BeautifulSoup


class CrawlRoot:
    def __init__(self):
        self.intent_dict = {
            # "purple": {"parking structure 1": "5", "parking structure 3": "10", "parking structure 4": "6"},
            "purple": {},
            "orange": {},
            "gold": {},
            "green": {},
            "red": "Sorry, I can only help with garage parking.",
            "visitor": "Welcome to U T Dallas, please head to the visitor center and obtain a visitor pass, or tell me you want to use metered parking. ",
            "pay-by-space": {}
        }

        # mapped values for HTML parsing
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
        for element in soup.findAll('table', {'id': park_struc}):
            body = element.find('tbody')
            avail_space = 0
            # finds each row for parking
            for row in body.findAll('tr'):
                cells = row.findAll("td")

                level = cells[0].text # integer
                # format string for permit type
                option = cells[1].text.rsplit(' ', 1)[0].lower() # orange permit
                if option != "pay-by-space":
                    avail_space += int(cells[2].text) # integer
                # note: levels may not be needed for this project
                else:
                    avail_space = int(cells[2].text)
                # build dictionary
                self.intent_dict[option].update({self.parking_dict[park_struc]: str(avail_space)})


    # general function for invoking HTML parse
    # placeholder function for lambda invocation
    def find_parking(self):
        http = urllib3.PoolManager(cert_reqs='CERT_REQUIRED', ca_certs=certifi.where())
        url_php = "https://www.utdallas.edu/services/transit/garages/_code.php"
        response = http.request('GET', url_php)
        soup = BeautifulSoup(response.data, features="html.parser")
        self.parse_parking(soup, 'ps1')
        self.parse_parking(soup, 'ps3')
        self.parse_parking(soup, 'ps4')
