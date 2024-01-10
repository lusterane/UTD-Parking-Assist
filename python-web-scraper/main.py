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
        print('DEBUG MODE ON')
        start_time = time.time()

    # initialize db context
    mongo_db = MongoDbConnection()
    mongo_db.initializeDBContext()

    cr = CrawlRoot()
    cr.find_parking()
    json = cr.buildJSONFormat()  # array of json documents

    mongo_db.CRITICAL_ResetPSCollection()
    mongo_db.placeIntoPSCollection(json)

    mongo_db.terminateDBContext()

    if DEBUG_MODE:
        print("elapsed time: " + str(round(time.time() - start_time,3)) + ' seconds')

    return '{"status":"200", "data": "OK"}'

def CRITICAL_reset_parkingstructures_table():
    mongo_db = MongoDbConnection()
    mongo_db.initializeDBContext()
    mongo_db.CRITICAL_ResetPSCollection()

if __name__ == "__main__":
    # CRITICAL_reset_parkingstructures_table()
    CloudFunction({})
