from dal.device_dal import DeviceDAL

class DeviceService:
    def __init__(self):
        self.device_dal = DeviceDAL()

    def add_device(self, data):
        return self.device_dal.insert_device(data)

    def get_all_devices(self):
        return self.device_dal.fetch_all_devices()