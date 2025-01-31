import jwt
from flask import request, jsonify
from functools import wraps
from config.config import Config
from dal.user_dal import UserDAL

def jwt_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get("Authorization")
        if not auth_header:
            return jsonify({"message": "Token manquant"}), 401

        try:
            token = auth_header.split(" ")[1]  # "Bearer <token>"
            decoded = jwt.decode(token, Config.SECRET_KEY, algorithms=["HS256"])
            user_dal = UserDAL()
            user = user_dal.get_user_by_username(decoded["username"])
            if not user:
                return jsonify({"message": "Utilisateur introuvable"}), 401
        except jwt.ExpiredSignatureError:
            return jsonify({"message": "Token expiré"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"message": "Token invalide"}), 401

        return f(user, *args, **kwargs)

    return decorated_function