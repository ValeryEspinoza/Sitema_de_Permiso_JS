/*import { deleteUserHistory } from "./Delete"


function mostrarEnPantalla(lista, contenedorDiv) {
    
    const contenedorSolicitud= document.createElement("div")
    contenedorSolicitud.style.padding = "1em"
 

    for (let index = 0; index < lista.length; index++) {
       

    //Get Nombre
    
    const etiquetaNombre= document.createElement("h3")
    etiquetaNombre.innerHTML=lista[index].nombre
    contenedorSolicitud.appendChild(etiquetaNombre)
    etiquetaNombre.style.marginBottom="1em"
    
    

   //Get Fecha
    const sumaFechaS="Fecha Salida:"+ " " + lista[index].fechaSalida + " "
    const datoFechaS= sumaFechaS

    const etiquetaFechaS= document.createElement("p")
    etiquetaFechaS.innerHTML=datoFechaS
    contenedorSolicitud.appendChild(etiquetaFechaS)

    const fechaR= "Fecha Regreso:"+ " "+ lista[index].fechaRegreso
    const datoFechaR= fechaR
    const etiquetaFechaR= document.createElement("p")
    etiquetaFechaR.innerHTML=datoFechaR
    contenedorSolicitud.appendChild(etiquetaFechaR)

    //Get LaptopCode
    const etiquetaCode= document.createElement("p")
    etiquetaCode.innerHTML="Codigo de Computadora:" + " "+ lista[index].laptopCode
    contenedorSolicitud.appendChild(etiquetaCode)
    

    //Sede
    const etiquetaSede= document.createElement("p")
    etiquetaSede.innerHTML="Sede:" + " "+ lista[index].sede
    contenedorSolicitud.appendChild(etiquetaSede)
    

    //Get Status
    const etiquetaStatus= document.createElement("h6")
    etiquetaStatus.innerHTML=lista[index].estatus
    contenedorSolicitud.appendChild(etiquetaStatus)

    

    //id
     const id = lista[index].id

     
      //Boton Eliminar
      const btnEliminar = document.createElement("button")
      btnEliminar.innerHTML= "Eliminar"
      contenedorSolicitud.appendChild(btnEliminar)

        btnEliminar.style.marginBottom ="8px"
        
      contenedorDiv.appendChild(contenedorSolicitud) 
        

    btnEliminar.addEventListener("click", function () {
        deleteUserHistory(id)
        location.reload()
    })

   
    }
    
}

export {mostrarEnPantalla}



/*for (let index = 0; index < listaUsuariosHistorial .length; index++) {
    //Get Nombre
    const contenedorSolicitud= document.createElement("div")
    const etiquetaNombre= document.createElement("h3")
    etiquetaNombre.innerHTML=listaUsuariosHistorial[index].nombre
    contenedorSolicitud.appendChild(etiquetaNombre)
    contenedorPrincipal.appendChild(contenedorSolicitud) 

   //Get Fecha
    const sumaFechaS="Fecha Salida:"+ " " + listaUsuariosHistorial[index].fechaSalida + " "
    const datoFechaS= sumaFechaS
    const etiquetaFechaS= document.createElement("p")
       etiquetaFechaS.innerHTML=datoFechaS
       contenedorSolicitud.appendChild(etiquetaFechaS)

    const fechaR= "Fecha Regreso:"+ " "+ listaUsuariosHistorial[index].fechaRegreso
    const datoFechaR= fechaR
    const etiquetaFechaR= document.createElement("p")
    etiquetaFechaR.innerHTML=datoFechaR
    contenedorSolicitud.appendChild(etiquetaFechaR)

    //Get LaptopCode
    const etiquetaCode= document.createElement("p")
    etiquetaCode.innerHTML="Codigo de Computadora:" + " "+ listaUsuariosHistorial[index].laptopCode
    contenedorSolicitud.appendChild(etiquetaCode)
    

    //Get Status
    const etiquetaStatus= document.createElement("h6")
    etiquetaStatus.innerHTML=listaUsuariosHistorial[index].estatus
    contenedorSolicitud.appendChild(etiquetaStatus)

    

    //id
     const id = listaUsuariosHistorial[index].id
     //const estatusLista= listaUsuariosHistorial[index].estatus
    // const nombre= listaUsuariosHistorial[index].nombre
     //const fechaRe= listaUsuariosHistorial[index].fechaRegreso
     //const fechaSa= listaUsuariosHistorial[index].fechaSalida
     
      //Boton Eliminar
      const btnEliminar = document.createElement("button")
      btnEliminar.innerHTML= "Eliminar"
      contenedorSolicitud.appendChild(btnEliminar)
                                                                              
       btnEliminar.addEventListener("click", function () {
           deleteUserHistory(id)
           location.reload()
       })

       
       


   
  }*/


       

/*cargar()
   
function cargar(){
    

   

    //Inputs
    const inputNombreCarga = document.getElementById("nombre")
    const inputIDCarga = document.getElementById("id")
    const inputSedeCarga = document.getElementById("sede")
    const inputLaptopCodeCarga = document.getElementById("laptopCode")
    const inputFechaSCarga = document.getElementById("fechaS")
    const inputFechaRCarga = document.getElementById("fechaR")
    const checkTerminosCarga = document.getElementById("terminos")


//Botones
const btnAplicarCarga = document.getElementById("aplicar")
const selectAccesoCarga = document.getElementById("acceso")


//contenedores
const divPrincipalCarga = document.getElementById("contenedorPrincipal")


   



btnAplicarCarga.addEventListener("click", function () {
    
    let menCarga = document.getElementById("men")
    
   if (inputNombreCarga.value == ""|| inputIDCarga.value == "" || inputSedeCarga.value == "" ||inputLaptopCodeCarga.value== "" || inputFechaSCarga.value == ""|| inputFechaRCarga.value== "") {
    let modal5Carga= document.createElement("h5")
    modal5Carga.innerHTML="¡No se pude dejar espacios vacios!"
    menCarga.appendChild(modal5Carga)
    if (checkTerminosCarga.checked === true) {
        let modal6Carga= document.createElement("h5")
        modal6Carga.innerHTML="¡Solicitud creada con exito!"
        men.appendChild(modal6Carga)

        let pendienteCarga = "Pendiente"
        sendRecuest(inputNombreCarga.value, inputIDCarga.value, inputSedeCarga.value, inputLaptopCodeCarga.value,
        inputFechaSCarga.value, inputFechaRCarga.value, pendienteCarga)      

    }else{
        let modalCarga= document.createElement("h5")
        modalCarga.innerHTML="¡Falta Marcar Terminos Y Condiciones!"
        menCarga.appendChild(modalCarga)
    }
   }
})
    
     if (selectAccesoCarga.textContent == "Administrador") {  
    console.log("Si puede usar Funciones Administrador");

    async function traerSolicitudesCarga() {
         const solicitudesCarga = await GetRecuest()
         console.log(solicitudesCarga);
         
         const tituloSolicitudCarga = document.createElement("h3")
         tituloSolicitudCarga.innerHTML="Solicitudes Pendientes"
         divPrincipalCarga.appendChild(tituloSolicitudCarga)

         for (let index = 0; index < solicitudesCarga.length; index++) {
                 //Get Nombre
                 const contenedorSolicitudCarga= document.createElement("div")
                 const etiquetaNombreCarga= document.createElement("h3")
                 etiquetaNombreCarga.innerHTML=solicitudesCarga[index].nombre
                 contenedorSolicitudCarga.appendChild(etiquetaNombreCarga)
                 divPrincipalCarga.appendChild(contenedorSolicitudCarga) 
     
                //Get Fecha
                 const sumaFechaSCarga="Fecha Salida:"+ " " + solicitudesCarga[index].fechaSalida + " "
                 const datoFechaS= sumaFechaSCarga
                 const etiquetaFechaSCarga= document.createElement("p")
                 etiquetaFechaSCarga.innerHTML=datoFechaS
                 contenedorSolicitudCarga.appendChild(etiquetaFechaSCarga)
     
                 const fechaRCarga= "Fecha Regreso:"+ " "+ solicitudes[index].fechaRegreso
                 const datoFechaRCarga= fechaRCarga
                 const etiquetaFechaRCarga= document.createElement("p")
                 etiquetaFechaRCarga.innerHTML=datoFechaRCarga
                 contenedorSolicitudCarga.appendChild(etiquetaFechaRCarga)
     
                 //Get LaptopCode
                 const etiquetaCodeCarga= document.createElement("p")
                 etiquetaCodeCarga.innerHTML="Codigo de Computadora:" + " "+ solicitudesCarga[index].laptopCode
                 contenedorSolicitudCarga.appendChild(etiquetaCodeCarga)
                 
     
               //Get Status
                 const etiquetaStatusCarga= document.createElement("h6")
                 etiquetaStatusCarga.innerHTML=solicitudesCarga[index].estatus
                 contenedorSolicitudCarga.appendChild(etiquetaStatusCarga)
       
                 //boton Aceptar
                 const btnAceptarCarga = document.createElement("button")
                 btnAceptarCarga.innerHTML= "Aceptar"
                 contenedorSolicitudCarga.appendChild(btnAceptarCarga)
     
                 //Boton Rechazar
                 const btnRechazarCarga = document.createElement("button")
                 btnRechazarCarga.innerHTML= "Declinar"
                 contenedorSolicitudCarga.appendChild(btnRechazarCarga)

                  //id
                  const idCarga = solicitudesCarga[index].id
                  const nombreCarga = solicitudesCarga[index].nombre
                  const cedulaCarga = solicitudesCarga[index].cedula
                  const sedeCarga = solicitudesCarga[index].sede
                  const laptopCodeCarga = solicitudesCarga[index].laptopCode
                  const fechaSCarga = solicitudesCarga[index].fechaSalida
                  const fechaReCarga = solicitudesCarga[index].fechaRegreso
                  
                 btnAceptarCarga.addEventListener("click", function () {
                    editUsers("Aceptado", idCarga, nombreCarga, cedulaCarga, sedeCarga, laptopCodeCarga,
                         fechaSCarga, fechaReCarga) 
                 })

                 if (solicitudesCarga[index].estatus === "Aceptado") {
                    sendRecuestToHistory("Aceptado", idCarga, nombreCarga, cedulaCarga, sedeCarga, laptopCodeCarga, fechaSCarga, fechaReCarga)
                    deleteUser(idCarga)
                    console.log("1234"); 
                 }

               
                  
        }
        
       
    }
   
    traerSolicitudesCarga()

    } 

    if (selectAccesoCarga.textContent == "Colaborador") {
        let modal2Carga= document.createElement("p")
        modal2Carga.innerHTML="¡Solicitud Realizada con exito! Pronto se enviará respuesta a su solicitud"
        menCarga.appendChild(modal2Carga)
    }

    if (selectAccesoCarga.textContent == "Acceso" || selectAccesoCarga.value == "") {
        let modal3Carga= document.createElement("p")
        modal3Carga.innerHTML="Debe Ingresar un tipo de acceso"
        menCarga.appendChild(modal3Carga)
    }



}*/


