FROM python:3.10-slim
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt gunicorn
EXPOSE 5002
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5002", "app:app"]
# CMD ["python3", "app.py"]