from flask import Blueprint, request, jsonify
from business.auth_service import AuthService

auth_bp = Blueprint("auth", __name__)
auth_service = AuthService()

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    result = auth_service.register_user(data)
    return jsonify(result), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    result = auth_service.login_user(data)
    return jsonify(result), 200