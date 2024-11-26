// frontend/src/components/ScriptsList.js
// import{ useState,useEffect } from 'react';
// import axios from 'axios';

export const ListScripts = () => {
  //const [scripts, setScripts] = useState([]);
  //const [loading, setLoading] = useState(true);

  // Cargar los scripts desde la API al montar el componente
  // useEffect(() => {
  //   const fetchScripts = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/scripts'); // Cambia la URL a tu backend
  //       setScripts(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching scripts', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchScripts();
  // }, []);

  // Mostrar la lista de scripts o un mensaje de carga
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <h2>Scripts</h2>
      {/* <ul>
        {scripts.map((script) => (
          <li key={script._id}>
            <h3>{script.title}</h3>
            <pre>{script.content}</pre>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
 

