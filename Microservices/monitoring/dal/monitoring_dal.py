from pymongo import MongoClient

class MonitoringDAL:
    def __init__(self):
        #self.client = MongoClient("mongodb://localhost:27017/")
        self.client = MongoClient("mongodb://mongodb:27017/")
        # self.client = MongoClient("mongodb://microservices-mongodb-1:27017/")
        # self.client = MongoClient("mongodb://microservices-mongodb-1:27017/")
        self.db = self.client["monitoring_db"]
        self.collection = self.db["device_data"]

    def insert_data(self, data):
        self.collection.insert_one(data)
        return {"message": "Data inserted successfully"}

    def fetch_all_data(self):
        return list(self.collection.find({}, {"_id": 0}))

    def fetch_data_by_device_id(self, device_id):
        return list(self.collection.find({"device_id": device_id}, {"_id": 0}))