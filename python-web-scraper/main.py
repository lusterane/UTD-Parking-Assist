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

    numberCurrentDocuments = MongoDbConnection().getEntriesCount()
    cr = CrawlRoot(numberCurrentDocuments)
    cr.find_parking()

    # Normal
    json = cr.buildJSONFormat()  # array of json documents
    if numberCurrentDocuments < 30:
        MongoDbConnection().insertNewDocuments(json)
    elif MongoDbConnection().checkDataIsStale():
        MongoDbConnection().CRITICAL_deleteAllDocuments()
    elif numberCurrentDocuments == 30:
        MongoDbConnection().replaceOldDocuments(json)
    else: # > 30
        MongoDbConnection().deleteOldestThreeDocuments()

    # Test
    # testJson = cr.buildJSONTestFormat()  # array of json documents
    # MongoDbConnection().writeToDB(testJson)

    if DEBUG_MODE:
        print("elapsed time: " + str(time.time() - start_time))


def Test():
    print(MongoDbConnection().getEntriesCount())


if __name__ == "__main__":
    CloudFunction({})
    # Test()
