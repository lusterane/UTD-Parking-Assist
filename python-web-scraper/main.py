'''
Author: Toby Chow
Description: Main method for testing Crawler
'''
from Crawl_Parking_Structures import CrawlRoot


def main():
    cr = CrawlRoot()
    cr.find_parking()
    print(cr.intent_dict)
    '''
    test_dict = {
        "purple": {"parking structure 1": "5", "parking structure 3": "10", "parking structure 4": "6"},
        "orange": {"parking structure 1": "6", "parking structure 3": "11", "parking structure 4": "7"},
        "gold": {"parking structure 1": "7", "parking structure 3": "12", "parking structure 4": "5"},
        "green": {"parking structure 1": "3", "parking structure 3": "6", "parking structure 4": "1"},
        "red": "Sorry, I can only help with garage parking.",
        "grey": {"parking structure 1": "5", "parking structure 3": "10", "parking structure 4": "6"}
    }
    print(test_dict)
    '''

if __name__ == "__main__":
    main()
