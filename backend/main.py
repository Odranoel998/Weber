from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from pymongo import MongoClient
from bson import ObjectId
import os

app = FastAPI()

# Conexión a MongoDB
MONGO_URI = os.getenv("MONGO_URI", "mongodb://admin:adminpassword@db:27017")
client = MongoClient(MONGO_URI)
db = client["weber_database"]
scripts_collection = db["scripts"]

# Modelo de Pydantic
class ScriptModel(BaseModel):
    title: str
    description: Optional[str] = None  # Ahora es opcional

    @classmethod
    def from_mongo(cls, doc):
        return cls(**doc)

# Rutas
@app.get("/scripts", response_model=List[ScriptModel])
async def get_scripts():
    documents = scripts_collection.find()
    result = [ScriptModel.from_mongo(doc) for doc in documents]
    return result

@app.post("/scripts", response_model=ScriptModel)
async def create_script(script: ScriptModel):
    script_dict = script.dict(exclude={"id"})  # Excluir 'id' para evitar problemas al insertar
    result = scripts_collection.insert_one(script_dict)
    new_script = scripts_collection.find_one({"_id": result.inserted_id})
    return ScriptModel.from_mongo(new_script)

@app.get("/scripts/{script_id}", response_model=ScriptModel)
async def get_script(script_id: str):
    try:
        script = scripts_collection.find_one({"_id": ObjectId(script_id)})
        if not script:
            raise HTTPException(status_code=404, detail="Script not found")
        return ScriptModel.from_mongo(script)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid script ID")
