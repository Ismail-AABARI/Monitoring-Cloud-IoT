from flask import Blueprint, request, jsonify
from dal.monitoring_dal import MonitoringDAL

monitoring_bp = Blueprint("monitoring", __name__)
dal = MonitoringDAL()

@monitoring_bp.route("/data", methods=["POST"])
def add_data():
    data = request.json
    result = dal.insert_data(data)
    return jsonify(result), 201

@monitoring_bp.route("/data", methods=["GET"])
def get_all_data():
    data = dal.fetch_all_data()
    return jsonify(data), 200