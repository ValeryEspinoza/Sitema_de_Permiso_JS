//envio de solicitud a endpoint 3004
async function sendRecuest (nombre, cedula, sede, laptopCode, fechaSalida, fechaRegreso, estatus) {


    try { 
      const newRecuest ={
        nombre,
        cedula, 
        sede, 
        laptopCode, 
        fechaSalida, 
        fechaRegreso,
        estatus
      }
  
      const response = await fetch(`http://localhost:3003/Recuest`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify(newRecuest) 
      
  });
  console.log("Solicitud Aplicada");
  
  const datos = await response.json();
  return datos
   
    } catch (error) {
      console.error(error);
    }
  }
  
      export {sendRecuest}



    // Enviar Solicitud a Historial
   async function sendRecuestToHistory (estatus, id, nombre, cedula, sede, laptopCode, fechaSalida, fechaRegreso) {


    try { 
      const sendRecuest ={
        estatus,
         id,
          nombre, 
          cedula, 
          sede, 
          laptopCode, 
          fechaSalida, 
          fechaRegreso
      }
  
      const respuesta = await fetch(`http://localhost:3003/History`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify(sendRecuest) 
      
  });
  console.log("Solicitud Enviada a Historial");
  
  const data = await respuesta.json();
  return data
   
    } catch (error) {
      console.error(error)
    }
  }
  
      export{sendRecuestToHistory}
    
    
  
   // Enviar Solicitud a Aceptadas
   async function sendRecuestToAcepted (estatus, id, nombre, cedula, sede, laptopCode, fechaSalida, fechaRegreso) {


    try { 
      const sendRecuestAcepted ={
          estatus,
          id,
          nombre, 
          cedula, 
          sede, 
          laptopCode, 
          fechaSalida, 
          fechaRegreso
      }
  
      const respuesta = await fetch(`http://localhost:3003/AceptedRecuest`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify(sendRecuestAcepted) 
      
  });
  console.log("Solicitud Enviada a Acepted Recuest");
  
  const dataAcepted = await respuesta.json();
  return dataAcepted
   
    } catch (error) {
      console.error(error)
    }
  }
  
      export {sendRecuestToAcepted}
    