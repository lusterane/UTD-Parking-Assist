import os
import datetime
from pymongo import MongoClient

class MongoDbConnection:
    def replaceOldDocuments(self, json):
        token = os.environ.get("MONGO_ATLAS_PW")

        if token == None:
            print("token: ", os.environ)
        client = MongoClient("mongodb+srv://lusterane:" +
                             token +
                             "@utd-parking-assist-fo6hm.mongodb.net/test?retryWrites=true&w=majority")
        db = client.utd_parking

        collection = db.parkingstructures
        old_permit_list = self.getListOldestPermits(collection)

        for ps in json:
            current_structure = ps['structure']
            old_document_id = old_permit_list[current_structure]['_id']

            # change to insert_one to initialize collection
            #result = collection.insert_one(ps)

            result = collection.replace_one({'_id': old_document_id}, ps)
            print(result)

        client.close()

    def insertNewDocuments(self, json):
        token = os.environ.get("MONGO_ATLAS_PW")

        if token == None:
            print("token: ", os.environ)
        client = MongoClient("mongodb+srv://lusterane:" +
                             token +
                             "@utd-parking-assist-fo6hm.mongodb.net/test?retryWrites=true&w=majority")
        db = client.utd_parking

        collection = db.parkingstructures

        for ps in json:
            result = collection.insert_one(ps)
            print(result)

        client.close()

    def deleteOldestThreeDocuments(self):
        token = os.environ.get("MONGO_ATLAS_PW")

        if token == None:
            print("token: ", os.environ)
        client = MongoClient("mongodb+srv://lusterane:" +
                             token +
                             "@utd-parking-assist-fo6hm.mongodb.net/test?retryWrites=true&w=majority")
        db = client.utd_parking

        collection = db.parkingstructures
        old_permit_list = self.getListOldestPermits(collection)

        ps1_id = old_permit_list['ps1']['_id']
        ps3_id = old_permit_list['ps3']['_id']
        ps4_id = old_permit_list['ps4']['_id']

        print(collection.delete_one({"_id": ps1_id}))
        print(collection.delete_one({"_id": ps3_id}))
        print(collection.delete_one({"_id": ps4_id}))

        client.close()

    def checkDataIsStale(self):
        # get most recent document
        token = os.environ.get("MONGO_ATLAS_PW")

        if token == None:
            print("token: ", os.environ)
        client = MongoClient("mongodb+srv://lusterane:" +
                             token +
                             "@utd-parking-assist-fo6hm.mongodb.net/test?retryWrites=true&w=majority")
        db = client.utd_parking
        collection = db.parkingstructures

        most_recent_document = collection.find().sort([("utc_time_updated", -1)]).limit(1)
        stale = False

        if most_recent_document is not None:
            # check if stale
            raw_document_datetime = most_recent_document.next()['utc_time_updated']
            # ex: 2020-05-22
            most_recent_date = datetime.datetime.date(raw_document_datetime)
            now_date = datetime.datetime.utcnow().date()

            if most_recent_date != now_date:
                stale = True

            # ex: 01:16:44.232000
            # MAYBE UNNECESSARY CODE. WILL KNOW IN FUTURE
            # most_recent_time = datetime.datetime.time(raw_document_datetime)
            # now_time = datetime.datetime

        client.close()
        return stale

    # only call if data is stale
    def CRITICAL_deleteAllDocuments(self):
        token = os.environ.get("MONGO_ATLAS_PW")

        if token == None:
            print("token: ", os.environ)
        client = MongoClient("mongodb+srv://lusterane:" +
                             token +
                             "@utd-parking-assist-fo6hm.mongodb.net/test?retryWrites=true&w=majority")
        db = client.utd_parking
        collection = db.parkingstructures

        print(collection.delete_many({}))
        print("DELETED ALL DOCUMENTS")
        client.close()

    def getEntriesCount(self):
        token = os.environ.get("MONGO_ATLAS_PW")

        if token == None:
            print("token: ", os.environ)
        client = MongoClient("mongodb+srv://lusterane:" +
                             token +
                             "@utd-parking-assist-fo6hm.mongodb.net/test?retryWrites=true&w=majority")
        db = client.utd_parking
        collection = db.parkingstructures
        client.close()
        return collection.count()

    # returns updated list with percent change values
    def updatePercentChange(self, permit_category_lis):
        token = os.environ.get("MONGO_ATLAS_PW")

        if token == None:
            print("token: ", os.environ)
        client = MongoClient("mongodb+srv://lusterane:" +
                             token +
                             "@utd-parking-assist-fo6hm.mongodb.net/test?retryWrites=true&w=majority")
        db = client.utd_parking

        collection = db.parkingstructures

        old_permit_list = self.getListOldestPermits(collection)

        for permit_entry in permit_category_lis:
            current_structure = permit_entry['structure']
            current_permit_list = permit_entry['permit_category']
            for index,  current_permit in enumerate(current_permit_list):
                old_permit = old_permit_list[current_structure]['permit_category'][index]
                old_permit_spots = int(old_permit['spots'])
                current_permit_spots = int(current_permit['spots'])

                # calculate percent change
                percent_change = (current_permit_spots - old_permit_spots) / old_permit_spots
                current_permit['percent_change_past_10_mins'] = percent_change

        client.close()
        # return updated permit category list
        return permit_category_lis

    def getListOldestPermits(self, collection):
        old_permit_list = {}
        # fill the old permit list
        # EX: old_permit_list = {'ps1': {'_id': ObjectId('asd'), permit_category: [{'id': ObjectId('123'), ..., 'spots': '123'}]}, 'ps3':'_id': ObjectId('asd'), permit_category:{[{...},{...}]}
        for document in collection.find().sort([("utc_time_updated", 1)]).limit(3):
            structure = document['structure']
            permit_category = document['permit_category']
            _id = document['_id']
            old_permit_list[structure] = {'_id': _id, 'permit_category': permit_category}
        return old_permit_list

