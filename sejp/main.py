# from typing import 
from fastapi import FastAPI
from pydantic import BaseModel, Field
from pymongo import MongoClient
from dotenv import dotenv_values

config = dotenv_values(".env")
app = FastAPI()

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]
    print("Connected to the MongoDB database!")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/")
def read_root():
    return {"Still": "Alive"}

# class User(BaseModel):
#     name: str
#     email: str
#     password: str
#     skills: list[str]
#     bookmarked: list[str]
    
@app.get("/user")
def read_user():
    pass

class UserCreate(BaseModel):
    name: str = Field(...)
    email: str = Field(...)
    password: str = Field(...)
    
@app.post("/user")
def create_user(new_user: UserCreate):
    return new_user

@app.put("/user")
def modify_user():
    pass

@app.get("/job")
def list_jobs():
    pass

@app.get("/job/{job_id}")
def read_job():
    pass

@app.post("/job")
def create_job():
    pass

@app.put("/job/{job_id}")
def modify_job():
    pass

@app.get("/auth")
def auth():
    pass