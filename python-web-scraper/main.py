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

    # initialize db context
    mongo_db = MongoDbConnection()
    mongo_db.initializeDBContext()

    numberCurrentDocuments = mongo_db.getEntriesCount()
    cr = CrawlRoot(numberCurrentDocuments)
    cr.find_parking()

    # Normal
    json = cr.buildJSONFormat()  # array of json documents

    # update percent change if necessary
    if cr.psCount == 30:
        json = mongo_db.updatePercentChange(json)
    if numberCurrentDocuments < 30:
        mongo_db.placeIntoPSCollection(json)
        mongo_db.placeIntoRecentCollection(json)
    elif mongo_db.checkDataIsStale():
        mongo_db.CRITICAL_ResetPSCollection()
        mongo_db.placeIntoPSCollection(json)
        mongo_db.placeIntoRecentCollection(json)
    elif numberCurrentDocuments == 30:
        mongo_db.replaceOldPSDocuments(json)
        mongo_db.placeIntoRecentCollection(json)
    else: # > 30
        mongo_db.deleteOldestThreeDocuments()
    mongo_db.terminateDBContext()

    # Test
    # REQUIRES REFACTORING
    # testJson = cr.buildJSONTestFormat()  # array of json documents
    # mongo_db.writeToDB(testJson)

    if DEBUG_MODE:
        print("elapsed time: " + str(time.time() - start_time))


def Test():
    print(MongoDbConnection().getEntriesCount())


if __name__ == "__main__":
    CloudFunction({})
    # Test()
