from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from models.user_model import Base, User
from config.config import Config
from sqlalchemy.exc import IntegrityError

engine = create_engine(Config.POSTGRES_URI)
Session = sessionmaker(bind=engine)
Base.metadata.create_all(engine)

class UserDAL:
    def __init__(self):
        self.session = Session()

    def add_user(self, username, email, password):
        try:
            new_user = User(username=username, email=email, password=password)
            self.session.add(new_user)
            self.session.commit()
            self.session.refresh(new_user)  # Assurez-vous que l'ID est bien chargé
            return new_user  # Retourner l'objet User, pas un tuple
        except IntegrityError:
            self.session.rollback()  # Annuler la transaction en cas d'erreur
            return None

    def get_user_by_username(self, username):
        try:
            return self.session.query(User).filter_by(username=username).first()
        except Exception:
            self.session.rollback()
            return None
        
    # def add_user(self, username, email, password):
    #     new_user = User(username=username, email=email, password=password)
    #     self.session.add(new_user)
    #     self.session.commit()
    #     return new_user

    # def get_user_by_username(self, username):
    #     try:
    #         return self.session.query(User).filter_by(username=username).first()
    #     except Exception:
    #         self.session.rollback()  # Annuler la transaction en cas d'erreur précédente
    #         return None