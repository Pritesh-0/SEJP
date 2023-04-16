from fastapi import FastAPI, Response, status, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import Optional, Annotated
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
# fake_users_db = {
#     "johndoe": {
#         "username": "johndoe",
#         "full_name": "John Doe",
#         "email": "johndoe@example.com",
#         "hashed_password": "fakehashedsecret",
#         "disabled": False,
#     },
#     "alice": {
#         "username": "alice",
#         "full_name": "Alice Wonderson",
#         "email": "alice@example.com",
#         "hashed_password": "fakehashedsecret2",
#         "disabled": True,
#     },
# }

class UserInDB():
    hashed_password: str
def fake_hash_password(s):
    return s
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
@app.post("/token")
def auth(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    user_dict = app.database["users"].find_one({
        "email": form_data.username
    })
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    user = User(**user_dict)
    hashed_password = fake_hash_password(form_data.password)
    if not hashed_password == user.password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    return {"access_token": user.email, "token_type": "bearer"}

def fake_decode_token(token):
    user = app.database["users"].find_one({
        "email": token
    })
    return user
def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    user = fake_decode_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user
def get_current_active_user(current_user: Annotated[User, Depends(get_current_user)]):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive User")
    return current_user
@app.get("/user")
def read_user(current_user: Annotated[User, Depends(get_current_active_user)]):
    return current_user
