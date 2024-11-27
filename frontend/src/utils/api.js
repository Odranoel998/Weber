const BASE_URL = "http://localhost:8000";

// Ejemplo: Obtener scripts
fetch(`${BASE_URL}/scripts`)
  .then((response) => response.json())
  .then((data) => console.log(data));
