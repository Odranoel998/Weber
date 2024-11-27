from fastapi import FastAPI
from fastapi import HTTPException
from pydantic import BaseModel
from typing import List, Optional
from database import scripts_collection

app = FastAPI()

class Script(BaseModel):
    title: str
    content: str
    version: Optional[int] = 1 
    
fake_db = []

@app.get("/scripts")
async def list_scripts():
    return fake_db 

@app.post("/scripts")
async def create_script(script: Script):
    fake_db.append(script) 
    return {"message": "Script created", "script": script}

@app.put("/scripts/{id}")
async def update_script(id: int, script: Script):
    if id >= len(fake_db):
        raise HTTPException(status_code=404, detail="Script not found")
    fake_db[id] = script
    return {"message": "Script updated", "id": id, "script": script}

@app.delete("/scripts/{id}")
async def delete_script(id: int):
    if id >= len(fake_db):
        raise HTTPException(status_code=404, detail="Script not found")
    deleted_script = fake_db.pop(id)
    return {"message": "Script deleted", "id": id, "script": deleted_script}


