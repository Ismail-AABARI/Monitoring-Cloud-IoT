import bcrypt
import jwt
from datetime import datetime, timedelta
from dal.user_dal import UserDAL
from config.config import Config

class UserService:
    def __init__(self):
        self.user_dal = UserDAL()

    def register_user(self, username, email, password):
        hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        return self.user_dal.add_user(username, email, hashed_pw)

    def authenticate_user(self, username, password):
        user = self.user_dal.get_user_by_username(username)
        if user and bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
            token = jwt.encode(
                {"username": username, "exp": datetime.utcnow() + timedelta(hours=1)},
                Config.SECRET_KEY,
                algorithm="HS256"
            )
            return token
        return None