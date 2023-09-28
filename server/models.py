# this code sets up a User model for a Flask application using SQLAlchemy. The User model has fields for id, email, and password, and it generates a unique identifier for each user. This is the foundation for working with user data in a Flask application and storing it in a database.

from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
import pickle
import pandas as pd
import numpy as np
from flask_login import UserMixin
db = SQLAlchemy()
#existing_user_ids = pickle.load(open('sorted_user_ids.pkl', 'rb'))
existing_user_ids = np.load('sorted_Ss.pkl', allow_pickle=True)

user_index = -1


def generate_unique_user_id(existing_user_ids):
    global user_index  # Declare user_index as a global variable
   
    user_index += 1
    #print(existing_user_ids)
    # Assuming existing_user_ids is a numpy array of integers
    user_id = int(existing_user_ids[user_index])

    return user_id


class User(db.Model, UserMixin):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, unique=True,
                   default=generate_unique_user_id(existing_user_ids))
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)
