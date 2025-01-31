print("Importing Flask...")
from flask import Flask
print("Importing controllers...")
from controllers.user_controller import user_bp

app = Flask(__name__)
app.register_blueprint(user_bp, url_prefix="/auth")

if __name__ == "__main__":
    print("Starting Signing Microservice on port 5003...")
    app.run(host="0.0.0.0", port=5003, debug=True)



# from flask import Flask
# from controllers.auth_controller import auth_bp
# from flask_jwt_extended import JWTManager

# app = Flask(__name__)
# app.config["JWT_SECRET_KEY"] = "your_jwt_secret_key"
# jwt = JWTManager(app)

# # Register Blueprint
# app.register_blueprint(auth_bp)

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000)