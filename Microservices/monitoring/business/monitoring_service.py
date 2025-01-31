from dal.monitoring_dal import MonitoringDAL

class MonitoringService:
    def _init_(self):
        self.monitoring_dal = MonitoringDAL()

    def save_device_data(self, data):
        return self.monitoring_dal.insert_data(data)

    def get_all_device_data(self):
        return self.monitoring_dal.fetch_all_data()

    def get_device_data(self, device_id):
        return self.monitoring_dal.fetch_data_by_device_id(device_id)