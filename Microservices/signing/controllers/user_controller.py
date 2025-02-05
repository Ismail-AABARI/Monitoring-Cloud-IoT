from flask import Blueprint, request, jsonify
from flask_cors import CORS
from business.user_service import UserService
from middleware.jwt_middleware import jwt_required

user_bp = Blueprint("user", __name__)
CORS(user_bp)  # ✅ Active CORS sur ce Blueprint
user_service = UserService()

@user_bp.route("/register", methods=["POST", "OPTIONS"])
def register():
    if request.method == "OPTIONS":
        print("✅ OPTIONS request received!")  # Debug
        return '', 204  # ✅ Répond à la requête préflight

    data = request.json
    user = user_service.register_user(data["username"], data["email"], data["password"])
    if user is None:
        return jsonify({"error": "User already exists"}), 400
    return jsonify({"message": "User registered successfully", "user_id": user.id}), 201

@user_bp.route("/login", methods=["POST", "OPTIONS"])
def login():
    if request.method == "OPTIONS":
        print("✅ OPTIONS request received for login!")  # Debug
        return '', 204  # ✅ Répond à la requête préflight

    data = request.json
    token = user_service.authenticate_user(data["username"], data["password"])
    if token:
        return jsonify({"token": token}), 200
    return jsonify({"message": "Invalid credentials"}), 401

# from flask import Blueprint, request, jsonify
# from flask_cors import cross_origin,CORS
# from business.user_service import UserService
# from middleware.jwt_middleware import jwt_required

# user_bp = Blueprint("user", __name__)
# CORS(user_bp)
# user_service = UserService()

# @user_bp.route("/register", methods=["POST", "OPTIONS"])
# @cross_origin()  # ✅ Active CORS
# def register():
#     if request.method == "OPTIONS":
#         return '', 204  # ✅ Répond aux requêtes prévol

#     data = request.json
#     user = user_service.register_user(data["username"], data["email"], data["password"])
#     if user is None:
#         return jsonify({"error": "User already exists"}), 400
#     return jsonify({"message": "User registered successfully", "user_id": user.id}), 201

# @user_bp.route("/login", methods=["POST", "OPTIONS"])
# @cross_origin()
# def login():
#     if request.method == "OPTIONS":
#         return '', 204

#     data = request.json
#     token = user_service.authenticate_user(data["username"], data["password"])
#     if token:
#         return jsonify({"token": token}), 200
#     return jsonify({"message": "Invalid credentials"}), 401

# @user_bp.route("/me", methods=["GET", "OPTIONS"])
# @cross_origin()
# @jwt_required
# def get_user_info(user):
#     if request.method == "OPTIONS":
#         return '', 204

#     return jsonify({
#         "username": user.username,
#         "email": user.email,
#         "message": "Données utilisateur récupérées avec succès"
#     }), 200


# from flask import Blueprint, request, jsonify
# from flask_cors import CORS, cross_origin
# from business.user_service import UserService
# from middleware.jwt_middleware import jwt_required

# user_bp = Blueprint("user", __name__)
# CORS(user_bp)  # ✅ Active CORS sur le Blueprint
# user_service = UserService()

# @user_bp.route("/register", methods=["POST", "OPTIONS"])
# @cross_origin()
# def register():
#     if request.method == "OPTIONS":
#         return '', 204  # ✅ Répond aux requêtes prévol

#     data = request.json
#     user = user_service.register_user(data["username"], data["email"], data["password"])
#     if user is None:
#         return jsonify({"error": "User already exists"}), 400
#     return jsonify({"message": "User registered successfully", "user_id": user.id}), 201

# @user_bp.route("/login", methods=["POST", "OPTIONS"])
# @cross_origin()
# def login():
#     if request.method == "OPTIONS":
#         return '', 204  # ✅ Répond aux requêtes prévol

#     data = request.json
#     token = user_service.authenticate_user(data["username"], data["password"])
#     if token:
#         return jsonify({"token": token}), 200
#     return jsonify({"message": "Invalid credentials"}), 401

# @user_bp.route("/me", methods=["GET", "OPTIONS"])
# @cross_origin()
# @jwt_required
# def get_user_info(user):
#     if request.method == "OPTIONS":
#         return '', 204  # ✅ Répond aux requêtes prévol

#     return jsonify({
#         "username": user.username,
#         "email": user.email,
#         "message": "Données utilisateur récupérées avec succès"
#     }), 200


# from flask import Blueprint, request, jsonify
# from business.user_service import UserService
# from middleware.jwt_middleware import jwt_required



# user_bp = Blueprint("user", __name__)
# user_service = UserService()

# @user_bp.route("/register", methods=["POST"])
# def register():
#     data = request.json
#     user = user_service.register_user(data["username"], data["email"], data["password"])

#     if user is None:  # Vérifie si l'utilisateur existe déjà
#         return jsonify({"error": "User already exists"}), 400

#     return jsonify({"message": "User registered successfully", "user_id": user.id}), 201

# @user_bp.route("/login", methods=["POST"])
# def login():
#     data = request.json
#     token = user_service.authenticate_user(data["username"], data["password"])
#     if token:
#         return jsonify({"token": token}), 200
#     return jsonify({"message": "Invalid credentials"}), 401



# @user_bp.route("/me", methods=["GET"])
# @jwt_required
# def get_user_info(user):
#     return jsonify({
#         "username": user.username,
#         "email": user.email,
#         "message": "Données utilisateur récupérées avec succès"
#     }), 200