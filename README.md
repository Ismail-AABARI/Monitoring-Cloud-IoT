# Monitoring Cloud IoT

**Ce projet et son architecture ont été conçus par le professeur de très grande qualité et professionnel Monsieur LAHMER Mohammed.**  
**Copyright et réservé sous droit de Lahmer Mohammed.**  
**Travail réalisé par Ismail AABARI et Hamza ES-SAHLY.**  

## 📝 Description
Monitoring Cloud IoT est une application basée sur une architecture microservices permettant de gérer l'authentification des utilisateurs, l'administration des dispositifs IoT et la surveillance des données transmises par ces derniers. L'objectif est de fournir une plateforme robuste et scalable pour le suivi en temps réel des appareils connectés.

## 🔗 Microk8s Pods Up 
![Microk8s Pods](https://github.com/Ismail-AABARI/Monitoring-Cloud-IoT/blob/main/pods.png)

## 🔧 Docker Containers Up 
![Docker Containers](https://github.com/Ismail-AABARI/Monitoring-Cloud-IoT/blob/main/Containers%20de%20docker.png)

## 📜 Test Via Curl
![ Test Via Curl](https://github.com/Ismail-AABARI/Monitoring-Cloud-IoT/blob/main/pods.png)


## 🚀 **Architecture du projet**
L'application est construite autour de trois microservices :

1. **Signing Microservice**  
   - Gère l'authentification et l'autorisation des utilisateurs.
   - Technologies : Flask, PostgreSQL, Redis.

2. **Device Management Microservice**  
   - Permet l'enregistrement, la configuration et la gestion des statuts des appareils IoT.
   - Technologies : Flask, PostgreSQL, Redis.

3. **Monitoring Microservice**  
   - Collecte, stocke et visualise les données provenant des dispositifs IoT.
   - Technologies : Flask, MongoDB, Socket.IO.

L'architecture est orchestrée à l'aide de **Kubernetes** et la communication entre les microservices est facilitée par **RabbitMQ**.

## 🔗 **Communication entre microservices**
- **Signing & Device Management** : Communication synchrone via HTTP REST.
- **Device Management & Monitoring** : Communication asynchrone via **RabbitMQ** pour l'envoi des données IoT en temps réel.
- **Monitoring** : Mise à jour en temps réel des clients via **Socket.IO**.

## 🔧 **Technologies utilisées**
- **Backend** : Flask (Microservices)
- **Bases de données** : PostgreSQL (Signing & Device Management), Redis (Cache), MongoDB (Monitoring)
- **Messagerie asynchrone** : RabbitMQ
- **Communication en temps réel** : Socket.IO
- **Orchestration** : Kubernetes (MicroK8s)
- **Containerisation** : Docker
- **API Gateway** : NGINX
- **Surveillance et monitoring** : Prometheus, Grafana
- **Simulation des données IoT** : MQTT, scripts Python

## 📂 **Structure du projet**
```
monitoring-cloud-iot/
│── microservices/
│   ├── signing/
│   │   ├── dal/
│   │   ├── business/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── config/
│   │   ├── tests/
│   │   ├── app.py
│   ├── device-management/
│   ├── monitoring/
│── iot-devices/ (simulation de données IoT)
│── end-devices/ (gestion des appareils finaux)
│── docker/
│── k8s/
│── README.md
```

## 🏗️ **Mise en place du projet**

### 1️⃣ **Développement des microservices**
- **Signing** : Gestion des utilisateurs avec Flask et PostgreSQL.
- **Device Management** : Enregistrement et gestion des appareils avec Flask et PostgreSQL.
- **Monitoring** : Stockage et diffusion des données IoT avec MongoDB et Socket.IO.

### 2️⃣ **Containerisation et tests**
- Création d'un **Dockerfile** pour chaque microservice.
- Tests avec **Docker Compose**.

### 3️⃣ **Déploiement avec Kubernetes**
- Conversion du fichier **docker-compose** en ressources Kubernetes avec **Kompose**.
- Déploiement des microservices sur **Kubernetes**.

## 📜 **Installation et exécution**
### Prérequis
- Python 3.9+
- Docker & Docker Compose
- Kubernetes (MicroK8s recommandé)
- PostgreSQL, Redis, MongoDB

