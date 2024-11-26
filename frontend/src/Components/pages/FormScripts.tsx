// frontend/src/components/FormScripts.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export const FormScripts = () => {
// export const FormScripts = ({ scriptId, onSave }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [isEditing, setIsEditing] = useState(false);

  // Si hay un `scriptId`, cargamos el script para editarlo
//   useEffect(() => {
//     if (scriptId) {
//       setIsEditing(true);
//       const fetchScript = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8000/scripts/${scriptId}`);
//           setTitle(response.data.title);
//           setContent(response.data.content);
//         } catch (error) {
//           console.error('Error fetching script for editing', error);
//         }
//       };
//       fetchScript();
//     } else {
//       setIsEditing(false);
//     }
//   }, [scriptId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const newScript = { title, content };

//     try {
//       if (isEditing) {
//         // Actualizar script existente
//         await axios.put(`http://localhost:8000/scripts/${scriptId}`, newScript);
//       } else {
//         // Crear nuevo script
//         await axios.post('http://localhost:8000/scripts', newScript);
//       }
//       onSave();  // Llamamos a la función que actualiza la lista de scripts en el componente principal
//       setTitle('');
//       setContent('');
//     } catch (error) {
//       console.error('Error saving script', error);
//     }
//   };

  return (
    // <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-50 rounded-lg shadow-md">
    //   <h2 className="text-2xl font-semibold">{isEditing ? 'Editar Script' : 'Crear Nuevo Script'}</h2>
    //   <div>
    //     <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
    //     <input
    //       type="text"
    //       id="title"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //       required
    //       className="w-full p-2 mt-2 border border-gray-300 rounded-md"
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenido</label>
    //     <textarea
    //       id="content"
    //       value={content}
    //       onChange={(e) => setContent(e.target.value)}
    //       required
    //       rows="6"
    //       className="w-full p-2 mt-2 border border-gray-300 rounded-md"
    //     />
    //   </div>
    //   <button
    //     type="submit"
    //     className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    //   >
    //     {isEditing ? 'Actualizar Script' : 'Crear Script'}
    //   </button>
    // </form>
    <h2>FormScripts</h2>
  );
};
