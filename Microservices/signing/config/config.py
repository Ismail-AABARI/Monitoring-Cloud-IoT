class Config:
    # POSTGRES_URI = "postgresql://admin:1234@localhost/signing_db"
    # POSTGRES_URI = "postgresql://admin:1234@postgres/signing_db"  # Remplace localhost par postgres
    POSTGRES_URI = "postgresql://admin:1234@postgres.default.svc.cluster.local/signing_db"
    SECRET_KEY = "your_secret_key_here"