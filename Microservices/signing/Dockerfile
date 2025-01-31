# Utiliser une image Python officielle
FROM python:3.10-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY . /app

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt gunicorn

# Exposer le port
EXPOSE 5003

# Lancer le microservice
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5003", "app:app"]
# CMD ["python3", "app.py"]