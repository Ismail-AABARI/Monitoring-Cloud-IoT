from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

# Routes vers les microservices
DEVICE_MANAGEMENT_URL = "http://127.0.0.1:5001"
MONITORING_URL = "http://127.0.0.1:5002"

@app.route("/devices", methods=["GET", "POST"])
def devices():
    """Proxy pour les endpoints Device Management."""
    if request.method == "GET":
        response = requests.get(f"{DEVICE_MANAGEMENT_URL}/devices")
    elif request.method == "POST":
        response = requests.post(f"{DEVICE_MANAGEMENT_URL}/devices", json=request.json)
    return jsonify(response.json()), response.status_code

@app.route("/data", methods=["GET", "POST"])
def data():
    """Proxy pour les endpoints Monitoring."""
    if request.method == "GET":
        response = requests.get(f"{MONITORING_URL}/data")
    elif request.method == "POST":
        response = requests.post(f"{MONITORING_URL}/data", json=request.json)
    return jsonify(response.json()), response.status_code

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)