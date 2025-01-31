from flask import Blueprint, request, jsonify
from business.user_service import UserService
from middleware.jwt_middleware import jwt_required



user_bp = Blueprint("user", __name__)
user_service = UserService()

@user_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    user = user_service.register_user(data["username"], data["email"], data["password"])

    if user is None:  # Vérifie si l'utilisateur existe déjà
        return jsonify({"error": "User already exists"}), 400

    return jsonify({"message": "User registered successfully", "user_id": user.id}), 201

@user_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    token = user_service.authenticate_user(data["username"], data["password"])
    if token:
        return jsonify({"token": token}), 200
    return jsonify({"message": "Invalid credentials"}), 401



@user_bp.route("/me", methods=["GET"])
@jwt_required
def get_user_info(user):
    return jsonify({
        "username": user.username,
        "email": user.email,
        "message": "Données utilisateur récupérées avec succès"
    }), 200