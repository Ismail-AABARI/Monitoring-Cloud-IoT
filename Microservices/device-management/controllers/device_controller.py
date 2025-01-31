from flask import Blueprint, request, jsonify
from business.device_service import DeviceService

device_bp = Blueprint("device", __name__)
device_service = DeviceService()

@device_bp.route("/devices", methods=["POST"])
def add_device():
    data = request.json
    result = device_service.add_device(data)
    return jsonify(result), 201

@device_bp.route("/devices", methods=["GET"])
def get_devices():
    devices = device_service.get_all_devices()
    return jsonify(devices), 200