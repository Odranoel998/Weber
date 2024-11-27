# Usar Node.js como base
FROM node:20

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias primero
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Usar una imagen base para servir los archivos estáticos
FROM nginx:stable-alpine

# Copiar los archivos construidos al directorio de Nginx
COPY --from=0 /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
