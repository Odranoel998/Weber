# Imagen base
FROM python:3.11-slim

# Configurar el directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema necesarias para Python
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Crear el entorno virtual
RUN python3 -m venv /opt/venv

# Activar el entorno virtual y asegurarlo en PATH
ENV PATH="/opt/venv/bin:$PATH"

# Copiar el archivo de dependencias
COPY requirements.txt .

# Instalar las dependencias dentro del entorno virtual
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente
COPY . .

# Exponer el puerto
EXPOSE 8000

# Comando para ejecutar la app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

