import os
from pymongo import MongoClient


class MongoDbConnection:
    def writeToDB(self, json):
        token = os.environ.get("MONGO_ATLAS_PW")
        client = MongoClient("mongodb+srv://lusterane:" +
                             token +
                             "@utd-parking-assist-fo6hm.mongodb.net/test?retryWrites=true&w=majority")
        db = client.utd_parking

        for ps in json:
            ps_name = ps['structure']
            # change to insert_one to initialize collection
            result = db.parking_data.replace_one({'structure': ps_name}, ps)
            print(result)

        client.close()
