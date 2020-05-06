'''
Author: Toby Chow
Description: Main method for testing Crawler
'''
from Crawl_Parking_Structures import CrawlRoot


def main():
    cr = CrawlRoot()
    cr.find_parking()
    # print(cr.parking_json)
    cr.printParkingStructureData()

if __name__ == "__main__":
    main()
