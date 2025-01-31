import psycopg2
from psycopg2 import sql, errors

class DeviceDAL:
    def __init__(self):
        self.connection = psycopg2.connect(
            dbname="device_db",
            user="admin", 
            password="1234",
            host="postgres"  # Remplace localhost par postgres
        )
        self.connection.autocommit = True  # Permet d'éviter les transactions bloquées

    def insert_device(self, data):
        try:
            with self.connection.cursor() as cursor:
                cursor.execute(
                    "INSERT INTO devices (device_id, status, temperature) VALUES (%s, %s, %s)",
                    (data["device_id"], data["status"], data["temperature"])
                )
                self.connection.commit()
            return {"message": "Device added successfully"}

        except errors.UniqueViolation:
            self.connection.rollback()  # Annule la transaction pour éviter le blocage
            return {"error": "Device with this ID already exists"}, 400
        
        except Exception as e:
            self.connection.rollback()  # Annule la transaction en cas d'erreur
            return {"error": str(e)}, 500

    def fetch_all_devices(self):
        with self.connection.cursor() as cursor:
            cursor.execute("SELECT * FROM devices")
            rows = cursor.fetchall()
        return [{"id": row[0], "device_id": row[1], "status": row[2], "temperature": row[3]} for row in rows]


# import psycopg2

# class DeviceDAL:
#     def __init__(self):
#         self.connection = psycopg2.connect(
#             dbname="device_db",
#             user="admin", 
#             password="1234",
#             host="postgres" # remplace localhost par postgres
#         )

#     def insert_device(self, data):
#         with self.connection.cursor() as cursor:
#             cursor.execute(
#                 "INSERT INTO devices (device_id, status, temperature) VALUES (%s, %s, %s)",
#                 (data["device_id"], data["status"], data["temperature"])
#             )
#             self.connection.commit()
#         return {"message": "Device added successfully"}

#     def fetch_all_devices(self):
#         with self.connection.cursor() as cursor:
#             cursor.execute("SELECT * FROM devices")
#             rows = cursor.fetchall()
#         return [{"id": row[0], "device_id": row[1], "status": row[2], "temperature": row[3]} for row in rows]



# # import psycopg2

# # class DeviceDAL:
# #     def __init__(self):
# #         self.connection = psycopg2.connect(
# #             dbname="device_db",
# #             user="admin", 
# #             password="1234",
# #             host="postgres" # remplace localhost par postgres
# #         )

# #     def insert_device(self, data):
# #         with self.connection.cursor() as cursor:
# #             cursor.execute(
# #                 "INSERT INTO devices (name, type, status) VALUES (%s, %s, %s)",
# #                 (data["name"], data["type"], data["status"])
# #             )
# #             self.connection.commit()
# #         return {"message": "Device added successfully"}

# #     def fetch_all_devices(self):
# #         with self.connection.cursor() as cursor:
# #             cursor.execute("SELECT * FROM devices")
# #             rows = cursor.fetchall()
# #         return [{"id": row[0], "name": row[1], "type": row[2], "status": row[3]} for row in rows]