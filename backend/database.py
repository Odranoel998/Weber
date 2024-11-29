from pymongo import MongoClient

client = MongoClient("mongodb://mongo:27017")  # URL para conectar al contenedor de MongoDB
db = client["mi_base_de_datos"]  # Cambia "mi_base_de_datos" por el nombre de tu base de datos
scripts_collection = db["scripts"]  # Cambia "scripts" por el nombre de tu colección
