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

    # testing
    # NEEDS FLASK. implement in future
    # req = request.args.get('name')
    # if req and 'action' in req:
    #     test(req, mongo_db)
    # else:
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
        mongo_db.deleteOldestThreeDocuments()
        mongo_db.placeIntoPSCollection(json)
        mongo_db.placeIntoRecentCollection(json)
    else: # > 30
        mongo_db.deleteOldestThreeDocuments()
    mongo_db.terminateDBContext()

    if DEBUG_MODE:
        print("elapsed time: " + str(time.time() - start_time))

# testing for Google Cloud Function
def test(req, mongo_db):
    if req == 'reset_parkingstructures':
        print('ACTION: RESETTING PARKING STRUCTURES')
        mongo_db.CRITICAL_ResetPSCollection()
    elif req == 'place_into_ps_collection':
        print('ACTION: PLACE INTO PS COLLECTION')
        numberCurrentDocuments = mongo_db.getEntriesCount()

        cr = CrawlRoot(numberCurrentDocuments)
        cr.find_parking()
        json = cr.buildJSONFormat()

        mongo_db.placeIntoPSCollection(json)
    else:
        print('UNKNOWN ACTION')
        print('Available Actions: reset_parkingstructures | place_into_ps_collection')
        print('i.e. {"action": "reset_parkingstructures"}')


if __name__ == "__main__":
    CloudFunction({})
    # Test()
