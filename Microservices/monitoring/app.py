from flask import Flask, jsonify, request
from flask_socketio import SocketIO
import pika
import json
import threading
from dal.monitoring_dal import MonitoringDAL
from controllers.monitoring_controller import monitoring_bp
import time
from pymongo import MongoClient

app = Flask(__name__)
socketio = SocketIO(app)

# Initialiser le DAL pour MongoDB
dal = MonitoringDAL()

# Configuration MongoDB
MONGO_URI = "mongodb://mongodb:27017/"
client = MongoClient(MONGO_URI)
db = client["monitoring_db"]
collection = db["device_data"]

def connect_to_rabbitmq():
    for _ in range(5):  # Réessayer 5 fois avant d'abandonner
        try:
            connection = pika.BlockingConnection(
                pika.ConnectionParameters(
                    host='rabbitmq',
                    port=5672,
                    heartbeat=600,  # Augmente le délai d'expiration des heartbeats
                    blocked_connection_timeout=300,  # Timeout pour connexions bloquées
                    retry_delay=5  # Délai entre les tentatives de connexion
                )
            )
            channel = connection.channel()
            channel.queue_declare(queue='device_data')
            print("✅ Connexion établie avec RabbitMQ")
            return connection, channel
        except pika.exceptions.AMQPConnectionError as e:
            print(f"⚠️ Erreur de connexion à RabbitMQ : {e}")
            time.sleep(5)  # Attendre avant de réessayer
    raise Exception("🚨 Impossible de se connecter à RabbitMQ après plusieurs tentatives")
# def connect_to_rabbitmq():
#     connection = pika.BlockingConnection(
#         pika.ConnectionParameters(
#             host='rabbitmq',
#             port=5672,
#             heartbeat=60,  # Augmente le délai d'attente des heartbeats
#             blocked_connection_timeout=300  # Timeout pour les connexions bloquées
#         )
#     )
#     channel = connection.channel()
#     channel.queue_declare(queue='device_data')
#     return connection, channel

# Intégration de RabbitMQ
# def connect_to_rabbitmq():
#     """Créer une connexion et un canal RabbitMQ."""
#     connection = pika.BlockingConnection(pika.ConnectionParameters(host='rabbitmq',port=5672)) # remplace localhost par rabbitmq
#     channel = connection.channel()
#     channel.queue_declare(queue='device_data')  # Crée une queue 'device_data'
#     return connection, channel

# Créer une connexion RabbitMQ pour la publication
rabbit_connection, channel = connect_to_rabbitmq()

# Ajouter RabbitMQ dans l'endpoint POST
@app.route("/data", methods=["POST"])
def add_data():
    data = request.json
    # Publier les données dans RabbitMQ
    channel.basic_publish(
        exchange='',
        routing_key='device_data',
        body=json.dumps(data)
    )
    return jsonify({"message": "Data published to RabbitMQ"}), 201

# Endpoint GET /data
@app.route("/data", methods=["GET"])
def get_data():
    try:
        data = list(collection.find({}, {"_id": 0}))
        return jsonify(data), 200
    except Exception as e:
        return {"error": str(e)}, 500

# Ajouter le Blueprint des autres endpoints
app.register_blueprint(monitoring_bp)

# Consommateur RabbitMQ
def consume_rabbitmq():
    """Consomme les messages RabbitMQ et les insère dans MongoDB."""
    def callback(ch, method, properties, body):
        data = json.loads(body)
        print(f"Consuming: {data}")
        dal.insert_data(data)  # Insère les données dans MongoDB

    # Créer une connexion séparée pour le consommateur
    connection, channel = connect_to_rabbitmq()
    channel.basic_consume(queue='device_data', on_message_callback=callback, auto_ack=True)
    print("Started consuming from RabbitMQ...")
    channel.start_consuming()

# Lancer le consommateur dans un thread séparé
consumer_thread = threading.Thread(target=consume_rabbitmq)
consumer_thread.start()  # Supprimé daemon=True pour éviter que le thread s'arrête

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5002, allow_unsafe_werkzeug=True)
    #socketio.run(app, host="0.0.0.0", port=5002)