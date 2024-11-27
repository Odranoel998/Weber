# Usar Python 3.9 como base
FROM python:3.9-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar las dependencias primero
COPY requirements.txt .

# Instalar las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto para FastAPI
EXPOSE 8000

# Comando por defecto para iniciar FastAPI
CMD ["uvicorn", "man:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
