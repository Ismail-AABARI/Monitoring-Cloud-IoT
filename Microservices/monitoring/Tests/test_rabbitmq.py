import pika

def connect_to_rabbitmq():
    try:
        connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
        print("RabbitMQ connection successful!")
        connection.close()
    except Exception as e:
        print(f"Failed to connect to RabbitMQ: {e}")

connect_to_rabbitmq()