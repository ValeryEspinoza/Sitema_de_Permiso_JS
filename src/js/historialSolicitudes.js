import { GetRecuestFromHistory } from "../server/GetRecuest";
import { deleteUserHistory } from "../server/Delete";
import { deleteHistory } from "../server/Delete";



//Contenedores
const contenedorPrincipal = document.getElementById("contenedorSolicitudes")
const contenedorFiltradas = document.getElementById("contenedorFiltrados")
const tituloFiltradoH2 = document.getElementById("tituloFiltrado")

//  Clases de estilos
contenedorPrincipal.className="contenedoresSolicitudesJs"


//Inputs
const inputBuscar = document.getElementById("inputSearch")

//Botones
const btnBuscar = document.getElementById("btnSearch")
const btnDejarDeFiltrar= document.getElementById("dejarDeFiltrar")
const btnEliminatTodo = document.getElementById("eliminarTodo")





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
        deleteUserHistory(id)
        location.reload()
    })

   
    }
    
}
traerUsuarios()

async function traerUsuarios() {
    
    const listaUsuariosHistorial = await GetRecuestFromHistory()
    btnDejarDeFiltrar.style.display= "none";
    mostrarEnPantalla(listaUsuariosHistorial, contenedorPrincipal)
   
for (let index = 0; index < listaUsuariosHistorial.length; index++) {
  
    const id = listaUsuariosHistorial[index].id
    const estatusLista= listaUsuariosHistorial[index].estatus
    const nombre= listaUsuariosHistorial[index].nombre
    const fechaRe= listaUsuariosHistorial[index].fechaRegreso
    const fechaSa= listaUsuariosHistorial[index].fechaSalida

    //Programacion de botones
btnBuscar.addEventListener("click", function () {
   
    contenedorPrincipal.style.display ="none";
    btnDejarDeFiltrar.style.display= "block";
    
    if (inputBuscar.value === "Declinado" ) {
        const listaFiltrada = listaUsuariosHistorial.filter( persona => persona.estatus === inputBuscar.value);
        tituloFiltradoH2.innerHTML="Solicitudes Declinadas"
        contenedorFiltradas.className="contenedoresSolicitudesJs"
      mostrarEnPantalla(listaFiltrada, contenedorFiltradas)      
    }                
    if (inputBuscar.value === "Aceptado") {
        const listaFiltrada = listaUsuariosHistorial.filter( persona => persona.estatus === inputBuscar.value);
        tituloFiltradoH2.innerHTML="Solicitudes Aceptadas"
        contenedorFiltradas.className="contenedoresSolicitudesJs"
        mostrarEnPantalla(listaFiltrada, contenedorFiltradas)      
    } 
    if (inputBuscar.value === listaUsuariosHistorial[index].nombre) {
        const listaFiltrada = listaUsuariosHistorial.filter( persona => persona.nombre === inputBuscar.value);
        tituloFiltradoH2.innerHTML="Solicitudes filtradas por Nombre"
        contenedorFiltradas.className="contenedoresSolicitudesJs"
        mostrarEnPantalla(listaFiltrada, contenedorFiltradas)      
    } 
     
    if (inputBuscar.value === listaUsuariosHistorial[index].sede) {
        const listaFiltrada= listaUsuariosHistorial.filter( persona => persona.sede === inputBuscar.value);
        tituloFiltradoH2.innerHTML="Solicitudes filtradas por Sede"
        contenedorFiltradas.className="contenedoresSolicitudesJs"
        mostrarEnPantalla(listaFiltrada, contenedorFiltradas)      
    } 

        
    })

    btnDejarDeFiltrar.addEventListener("click", function () {
        location.reload()
        contenedorFiltradas.style.display ="none";
        btnDejarDeFiltrar.style.display= "none";
        contenedorPrincipal.style.display="block"
        location.reload()
    })

    btnEliminatTodo.addEventListener("click", function () {
           btnEliminatTodo.style.display="none";
        
           

        for (let index = 0; index < listaUsuariosHistorial.length; index++) {
           
            const id = listaUsuariosHistorial[index].id
            deleteHistory(id)
           
            
        }  
        
        location.reload() 
       
    })


}
}

                 
















        //Explicacion de funcionamiento
        /*

        console.log(Array(listaUsuarios)) ----- convierte objeto a lista
        const map1 = listaUsuarios.map((x) => x.cedula);

        console.log(map1);

        const dividir = map1.toString()
    
        st = dividir.slice(0,4)
        const st2 = dividir.slice(5,9)

        console.log(st2);


        console.log(st);

        let vector = Array(st)

        console.log(vector);

        let cadenaT= vector.toString()

        var divisiones = cadenaT.split(" ", 3);
        
        console.log(divisiones);

        const unir = divisiones.concat(st2)
      
        console.log(unir);

     */

 

  
        
// Expected output:
   

