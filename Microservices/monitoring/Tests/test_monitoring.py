import unittest
from monitoring.app import app

class TestMonitoring(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_add_data(self):
        response = self.app.post("/data", json={
            "device_id": "device_1",
            "temperature": 25.5,
            "status": "active"
        })
        self.assertEqual(response.status_code, 201)

    def test_get_all_data(self):
        response = self.app.get("/data")
        self.assertEqual(response.status_code, 200)

    def test_get_device_data(self):
        device_id = "device_1"
        response = self.app.get(f"/data/{device_id}")
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()