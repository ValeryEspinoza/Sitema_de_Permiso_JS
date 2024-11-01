import { GetRecuestFromAcepted } from "../server/GetRecuest";
import { deleteUserAcepted } from "../server/Delete";

//Contenedores
const contenedorPrincipal = document.getElementById("contenedorSolicitudes")

function mostrarEnPantalla(lista, contenedorDiv) {
    
  const contenedorSolicitud= document.createElement("div")
  
 


  for (let index = 0; index < lista.length; index++) {
     

  //Get Nombre
  
 
      contenedorSolicitud.style.backgroundColor=""

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
  contenedorSolicitud.classList.add("contenedorSolicitudCreado")
  

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


    let sepa = document.createElement("hr")
    contenedorSolicitud.appendChild(sepa)
 

      btnEliminar.style.marginBottom ="8px"
      
    contenedorDiv.appendChild(contenedorSolicitud) 
 
  btnEliminar.addEventListener("click", function () {
      deleteUserAcepted(id)
      location.reload()
  })

 
  }
  
}

traerUsuarios()

async function traerUsuarios() {
  const listaUsuarios = await GetRecuestFromAcepted() 
    mostrarEnPantalla(listaUsuarios, contenedorPrincipal)
}

traerUsuarios()