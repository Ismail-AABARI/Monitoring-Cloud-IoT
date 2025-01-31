from dal.auth_dal import AuthDAL

class AuthService:
    def __init__(self):
        self.auth_dal = AuthDAL()

    def register_user(self, data):
        return self.auth_dal.create_user(data)

    def login_user(self, data):
        return self.auth_dal.authenticate_user(data)