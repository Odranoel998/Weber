# Usamos la imagen oficial de Python
FROM python:3.10

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de la aplicación
COPY . /app

# Instalamos las dependencias
RUN pip install -r requirements.txt

# Exponemos el puerto que FastAPI usará
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

