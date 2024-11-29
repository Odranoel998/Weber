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

# Modelo de datos para los scripts
class ScriptModel(BaseModel):
    id: Optional[str]  # ID generado por MongoDB
    title: str
    description: Optional[str] = None  # Descripción opcional

    # Método de clase para convertir un documento de MongoDB a un modelo Pydantic
    @classmethod
    def from_mongo(cls, doc):
        # Convertimos el _id de MongoDB a string y lo asignamos al campo id
        doc['id'] = str(doc['_id'])  # Convertir ObjectId a string
        del doc['_id']  # Eliminar el _id original de MongoDB para evitar duplicación
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
    result = scripts_collection.insert_one(script_dict)  # MongoDB genera el _id automáticamente
    new_script = scripts_collection.find_one({"_id": result.inserted_id})  # Recuperar el documento insertado
    return ScriptModel.from_mongo(new_script)  # Convertir el documento a ScriptModel y devolverlo


@app.get("/scripts/{script_id}", response_model=ScriptModel)
async def get_script(script_id: str):
    try:
        script = scripts_collection.find_one({"_id": ObjectId(script_id)})
        if not script:
            raise HTTPException(status_code=404, detail="Script not found")
        return ScriptModel.from_mongo(script)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid script ID")

@app.put("/scripts/{script_id}", response_model=ScriptModel)
async def update_script(script_id: str, script: ScriptModel):
    try:
        updated_script = scripts_collection.find_one_and_update(
            {"_id": ObjectId(script_id)},
            {"$set": script.dict(exclude_unset=True)},  
            return_document=True
        )
        if not updated_script:
            raise HTTPException(status_code=404, detail="Script not found")
        return ScriptModel.from_mongo(updated_script)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid script ID")

@app.delete("/scripts/{script_id}", response_model=ScriptModel)
async def delete_script(script_id: str):
    try:
        deleted_script = scripts_collection.find_one_and_delete({"_id": ObjectId(script_id)})
        if not deleted_script:
            raise HTTPException(status_code=404, detail="Script not found")
        return ScriptModel.from_mongo(deleted_script)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid script ID")
