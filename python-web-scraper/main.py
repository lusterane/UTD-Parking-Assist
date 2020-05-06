'''
Author: Toby Chow
Description: Main method for testing Crawler
'''
from Crawl_Parking_Structures import CrawlRoot
from MongoDbConnection import MongoDbConnection


def main():
    cr = CrawlRoot()
    cr.find_parking()
    # cr.printParkingStructureData()
    json = cr.buildJSONFormat()  # array of json documents
    MongoDbConnection().writeToDB(json)


if __name__ == "__main__":
    main()
