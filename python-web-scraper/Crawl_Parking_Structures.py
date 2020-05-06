'''
Author: Toby Chow
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
            "grey": {},
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
            # finds each row for parking
            for row in body.findAll('tr'):
                cells = row.findAll("td")

                level = cells[0].text # integer
                # format string for permit type
                option = cells[1].text.rsplit(' ', 1)[0].lower() # orange permit
                avail_space = cells[2].text # integer
                # note: levels may not be needed for this project

                # build dictionary
                self.intent_dict[option].update({self.parking_dict[park_struc]: avail_space})

                '''
                # last checked info
                last_checked = soup.find('table', {'id': 'ps4'}).find('p', {'class': 'centertight'}).text
                print(last_checked)
                '''
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
'''
    # finds the corresponding color for level of parking structure
    # "PS1" is Parking Structure 1, "PS3" is Parking Structure 3, "PS4" is Parking Structure 4
    # paramaters: parking_struc is corresponding parking structure and level is level of parking structure
    def find_color(self, parking_struc, level):
        # finding color for parking structure 1
        if parking_struc == "PS1":
            switcher = {
                1: "Pay-By-Space",
                2: "Purple&Orange",
                3: "Orange&Gold",
                4: "Gold",
                5: "Green"
            }
            return switcher.get(level, "Invalid Level")
'''

