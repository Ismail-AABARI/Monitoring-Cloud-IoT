import psycopg2
from flask_jwt_extended import create_access_token

class AuthDAL:
    def __init__(self):
        self.connection = psycopg2.connect(
            dbname="auth_db",
            user="admin",
            password="1234",
            host="localhost"
        )

    def create_user(self, data):
        with self.connection.cursor() as cursor:
            cursor.execute(
                "INSERT INTO users (username, password) VALUES (%s, %s)",
                (data["username"], data["password"])
            )
            self.connection.commit()
        return {"message": "User registered successfully"}

    def authenticate_user(self, data):
        with self.connection.cursor() as cursor:
            cursor.execute(
                "SELECT * FROM users WHERE username = %s AND password = %s",
                (data["username"], data["password"])
            )
            user = cursor.fetchone()
        if user:
            token = create_access_token(identity=data["username"])
            return {"token": token}
        return {"error": "Invalid credentials"}