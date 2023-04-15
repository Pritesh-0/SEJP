# from typing import 
from fastapi import FastAPI, Response, status
from fastapi.encoders import jsonable_encoder
from typing import Optional
from pydantic import BaseModel, Field
from pymongo import MongoClient
from dotenv import dotenv_values
import ulid

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

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(ulid.ULID()), alias="_id")
    name: str = Field(...)
    email: str = Field(...)
    password: str = Field(...)
    skills: Optional[list[str]]
    bookmarked: Optional[list[str]]
    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "01GY31J757TK7EN6XW6PWJFX5Q",
                "name": "Yu Narukami",
                "email": "yu@atlus.net",
                "password": "edeaaff3f1774ad2888673770c6d64097e391bc362d7d6fb34982ddf0efd18cb"
            }
        }
    
@app.get("/user")
def read_user():
    pass

@app.post("/user", response_description="Create a new user", 
    status_code=status.HTTP_201_CREATED, response_model=User)
def create_user(new_user: User):
    new_user_ = jsonable_encoder(new_user)
    new_user_ = app.database["users"].insert_one(new_user_)
    created_user = app.database["users"].find_one(
        {"_id": new_user_.inserted_id})
    return created_user

@app.put("/user")
def modify_user():
    pass

class Job(BaseModel):
    position: str = Field(...)
    employer: str = Field(...)
    description: str = Field(...)
    required_skills: list[str]

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