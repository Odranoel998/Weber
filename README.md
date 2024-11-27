Prueba Técnica Full-Stack con Docker
Esta prueba técnica evalúa tus habilidades en el desarrollo web full-stack utilizando tecnologías como 
React, Python, FastAPI, bases de datos, Git y Docker. Asegúrate de seguir las instrucciones detalladas a 
continuación y de completar cada tarea en el plazo especificado.
Una de las necesidades de Wiber es la gestión del ciclo de vida de los scripts de actualización de los 
equipos de red.
Si bien no se pretende en este ejercicio el desarrollo de la aplicación completa, el objetivo será simular 
una parte del flujo que incluye:
1) La creación, almacenamiento, recuperación y eliminación de scripts en una base de datos (para 
este ejercicio los scripts pueden ser cualquier texto de ejemplo, pero deben incluir varias líneas 
de texto).
2) Se debe considerar el versionado de los scripts cuando son creados y actualizados, guardando 
la historia completa de los cambios.
3) Se debe configurar tanto la interfaz de usuario como la base de datos para permitir la 
búsqueda de los scripts por filtros de texto determinados.
4) La aplicación deberá estar dockerizada en contenedores separados para front, back (API) y base 
de datos.
5) Stack a utilizar:
- Frontend: Javascript+React (con cualquier componente/framework/librería adicional que 
quieras)
- Backend (APIs): Python con Flask o FastAPI (Preferentemente FastAPI)
- Base de datos: SQL o MongoDB según preferencia (Preferentemente MongoDB)
Instrucciones Generales
• Tienes hasta la fecha y hora especificadas en el correo para completar esta prueba técnica.
• Debes entregar todo (Frontend, Backend y Base de datos) a través de los correspondientes
repositorios en Github.
• El repositorio deberá contener todos los archivos y código necesarios para cada tarea, incluyendo 
los archivos de configuración de Docker.
• Proporciona instrucciones claras sobre cómo ejecutar y configurar los contenedores Docker para el 
frontend, backend y base de datos utilizando archivo MD en cada uno de los repositorios.
Tarea 1: Configuración del Proyecto de React
• Configura un nuevo proyecto de React.
• Crea un frontend utilizando React que permita crear, visualizar, modificar o borrar los scripts.
Tarea 2: Desarrollo de la API REST (Flask o FastAPI)
• Configura un proyecto de Flask o FastAPI para servir como backend en un contenedor Docker 
separado.
• Define una API REST que permita realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la 
lista de scripts mencionada en la Tarea 1.
• Implementa rutas para manejar las solicitudes GET, POST, PUT y DELETE.
• Conéctate a una base de datos MySQL o MongoDB en un contenedor Docker separado para 
almacenar y recuperar los elementos.
Tarea 3: Integración de React con la API
• Conecta el componente de React creado en la Tarea 1 con la API REST desarrollada en la Tarea 2.
• Permite que el componente muestre la lista de elementos recuperados de la API.
• Implementa funciones para agregar, editar y eliminar elementos en la lista utilizando llamadas a la 
API.
Tarea 4: Manejo de Base de Datos
• Crea un contenedor Docker separado para la base de datos MySQL o MongoDB que almacene la 
lista de elementos.
• Asegúrate de que la API REST en el contenedor de backend pueda interactuar adecuadamente con 
la base de datos en el contenedor Docker.
Tarea 5: Control de Versiones con Git
• Inicializa un repositorio Git para cada uno de los proyectos (Frontend y backend).
• Realiza al menos tres confirmaciones (commits) con mensajes descriptivos que muestren cambios 
significativos en tu código.
• Crea una rama (branch) nueva, realiza cambios en ella y fusiona la rama de nuevo en la rama 
principal (master).
Entrega
Por favor, asegúrate de entregar la prueba técnica en el repositorio de GitHub o GitLab proporcionado. 
Asegúrate de que el README.MD contenga instrucciones claras sobre cómo ejecutar tanto el frontend 
como el backend, y cómo configurar los contenedores Docker para el frontend, backend y la base de 
datos. Indica si eliges usar Flask o FastAPI para el desarrollo del backend.