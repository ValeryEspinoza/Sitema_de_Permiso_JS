async function editUsers(estatus, id, nombre, cedula, sede, laptopCode, fechaSalida, fechaRegreso) {


    try { 
      const usuarioEditar ={
          estatus,
          nombre, 
          cedula, 
          sede, 
          laptopCode, 
          fechaSalida, 
          fechaRegreso
      }
  
      const respuesta = await fetch(`http://localhost:3003/Recuest/${id}`, {
      method: 'PUT', 
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify(usuarioEditar) // Convierte el objeto newUser a JSON para enviarlo en el cuerpo de la solicitud

  });
  console.log("Edicion Exitosa");
  
  const data = await respuesta.json();
  return data
   
    } catch (error) {
      console.error(error);
    }
  }
  
  export{ editUsers }