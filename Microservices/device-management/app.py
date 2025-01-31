from flask import Flask
from controllers.device_controller import device_bp

app = Flask(__name__)
app.register_blueprint(device_bp,url_predix="/")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)