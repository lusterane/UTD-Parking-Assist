'''
Author: Toby Chow
Description: Main method for testing Crawler
'''
from Crawl_Parking_Structures import CrawlRoot
from MongoDbConnection import MongoDbConnection

DEBUG_MODE = False

# integration with Google Cloud Function
def CloudFunction(request):


    if DEBUG_MODE:
        import time
        print("DEBUG_MODE ON")
        start_time = time.time()
    cr = CrawlRoot()
    cr.find_parking()


    # cr.printParkingStructureData()

    # Normal
    json = cr.buildJSONFormat()  # array of json documents
    MongoDbConnection().writeToDB(json)

    # Test
    # testJson = cr.buildJSONTestFormat()  # array of json documents
    # MongoDbConnection().writeToDB(testJson)


    if DEBUG_MODE:
        print("elapsed time: " + str(time.time() - start_time))


if __name__ == "__main__":
    CloudFunction({})
