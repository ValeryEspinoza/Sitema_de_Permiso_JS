
//Imports
import { sendRecuest } from "../server/PostRecuest"
import { GetRecuest } from "../server/GetRecuest"
import { editUsers } from "../server/update"
import { deleteUser } from "../server/Delete"
import { sendRecuestToHistory } from "../server/PostRecuest"
import { sendRecuestToAcepted } from "../server/PostRecuest"

//Inputs
const inputNombre = document.getElementById("nombre")
const inputID = document.getElementById("id")
const inputSede = document.getElementById("sede")
const inputLaptopCode = document.getElementById("laptopCode")
const inputFechaS = document.getElementById("fechaS")
const inputFechaR = document.getElementById("fechaR")
const checkTerminos = document.getElementById("terminos")
const textoMostradoAcceso= document.getElementById("textoMostrado")


//Botones
const btnAplicar = document.getElementById("aplicar")
const selectAcceso = document.getElementById("acceso")
const btnAdministrador1 = document.getElementById("btnAdmi1")
const btnAdministrador2 = document.getElementById("btnAdmi2")
const btnAdministrador3 = document.getElementById("btnAdmi3")
const btnColaboradorLogin = document.getElementById("btnColaborador")


//contenedores
const divPrincipal = document.getElementById("contenedorPrincipal")
const contenedorFondoSolicitudes = document.getElementById("contenedorFondoSolicitudes")
const contenedorTituloPagina = document.getElementById("contenedorTituloPagina")
const contenedorListaFormulario = document.getElementById("contenedorLista")
const contenedorItemsFormulario = document.getElementById("contenedorItems")
const men = document.getElementById("men")

    
  
    //Acceso
    selectAcceso.style.display="None"
    let user = JSON.parse(localStorage.getItem("usuario"))
    let listaUsuario = (Array(user))
    console.log("lista usuario", listaUsuario);
    tipoAcceso = listaUsuario[0].Roll
    selectAcceso.innerHTML= tipoAcceso
    
    let  nombreMostrar= listaUsuario[0].Nombres
    textoMostradoAcceso.innerHTML=nombreMostrar


          //Validacion ingresar tipo de acceso
          if (selectAcceso.textContent == "Acceso" || selectAcceso.textContent == "") {
            let modal3= document.createElement("p")
            modal3.innerHTML="Debe Ingresar un tipo de acceso"
            men.appendChild(modal3)
        }

    //Insetar nombre a formulario y bloquear input
    function noModificar(item) {
        item.disabled = true;
    }
  
    let sumaNombreApellido = listaUsuario[0].Nombres + " " + listaUsuario[0].Apellidos
    inputNombre.value=sumaNombreApellido
    noModificar(inputNombre)

    let inputcedula = listaUsuario[0].Cedula
    inputID.value=inputcedula

    noModificar(inputID)
    
    
    
 
   


    //Seccion de Administrador
    if (selectAcceso.textContent == "Administrador") {  

        //Insertar titulo
        const etiquetaH2Admi= document.createElement("h2")
        etiquetaH2Admi.innerHTML="Solicitudes Pendientes"
        contenedorTituloPagina.appendChild(etiquetaH2Admi)

        //OCULTAR FORMULARIO
        contenedorListaFormulario.style.display="none";
        contenedorItemsFormulario.style.display="none";

        console.log("Si puede usar Funciones Administrador")


       async function traerSolicitudes() {
        const solicitudes = await GetRecuest()


        for (let index = 0; index < solicitudes.length; index++) {
                 //Get Nombre
                 const contenedorSolicitud= document.createElement("div")
                 const etiquetaNombre= document.createElement("h3")
                 etiquetaNombre.innerHTML=solicitudes[index].nombre
                 contenedorSolicitud.appendChild(etiquetaNombre)
                 divPrincipal.appendChild(contenedorSolicitud) 
     
                //Get Fecha
                 const sumaFechaS="Fecha Salida:"+ " " + solicitudes[index].fechaSalida + " "
                 const datoFechaS= sumaFechaS
                 const etiquetaFechaS= document.createElement("p")
                 etiquetaFechaS.innerHTML=datoFechaS
                 contenedorSolicitud.appendChild(etiquetaFechaS)
     
                 const fechaR= "Fecha Regreso:"+ " "+ solicitudes[index].fechaRegreso
                 const datoFechaR= fechaR
                 const etiquetaFechaR= document.createElement("p")
                 etiquetaFechaR.innerHTML=datoFechaR
                 contenedorSolicitud.appendChild(etiquetaFechaR)
     
                 //Get LaptopCode
                 const etiquetaCode= document.createElement("p")
                 etiquetaCode.innerHTML="Codigo de Computadora:" + " "+ solicitudes[index].laptopCode
                 contenedorSolicitud.appendChild(etiquetaCode)
                 
     
                 //Get Status
                 const etiquetaStatus= document.createElement("h6")
                 etiquetaStatus.innerHTML=solicitudes[index].estatus
                 contenedorSolicitud.appendChild(etiquetaStatus)
       
                 //boton Aceptar
                 const btnAceptar = document.createElement("button")
                 btnAceptar.innerHTML= "Aceptar"
                 contenedorSolicitud.appendChild(btnAceptar)
     
                 //Boton Rechazar
                 const btnRechazar = document.createElement("button")
                 btnRechazar.innerHTML= "Declinar"
                 contenedorSolicitud.appendChild(btnRechazar)

                 //id
                  const id = solicitudes[index].id
                  const nombre = solicitudes[index].nombre
                  const cedula = solicitudes[index].cedula
                  const sede = solicitudes[index].sede
                  const laptopCode = solicitudes[index].laptopCode
                  const fechaS = solicitudes[index].fechaSalida
                  const fechaRe = solicitudes[index].fechaRegreso
                  

                  //Evento Btn Aceptar
                 btnAceptar.addEventListener("click", function () {
                    
                    editUsers("Aceptado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe)
                     
                    sendRecuestToHistory("Aceptado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe)
                    sendRecuestToAcepted("Aceptado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe)
                    console.log(id);
                    
                    deleteUser(id)
                  location.reload()
                 })

                 //Evento Btn Declinar
                 btnRechazar.addEventListener("click", function () {
                    editUsers("Declinado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe)
                    sendRecuestToHistory("Declinado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe)                   
                    deleteUser(id)
                  location.reload()
                 })
               
                  
        }}
            traerSolicitudes()
    } 
        
        //Acceso Colaborador
    if (selectAcceso.textContent == "Colaborador") {
        //Insertar Titulo
        const etiquetaH2Formulario= document.createElement("h2")
        etiquetaH2Formulario.innerHTML="Formulario de Solicitudes"
        contenedorTituloPagina.appendChild(etiquetaH2Formulario)
        
        //Oculta las funciones Administrador
        console.log("Ha ingresador como Colaborador")
        btnAdministrador1.style.display="none";
        btnAdministrador2.style.display="none";
        btnAdministrador3.style.display="none";

        //Evento Aplicar
        btnAplicar.addEventListener("click", function () {
            console.log("Boton funciona");
            
            //Validacion de espacios vacios
            console.log("Sede", inputSede.textContent === "Sede");
           if (inputNombre.value == ""|| inputID.value == "" || inputSede.value == "" ||inputLaptopCode.value== "" || inputFechaS.value == ""|| inputFechaR.value== "" || checkTerminos.checked === false || inputSede.value === "Sede") {
          
            console.log(1234);
            
           
            setTimeout(function(){
                let modal7= document.createElement("p")
                modal7.innerHTML="¡No puede quedar ningun espacio sin llenar"
                men.appendChild(modal7)
            }, 1000);
            
            console.log("Falta llenar espacios");
                   
            }else{
                
                setTimeout(function(){
                    let modal2= document.createElement("p")
                    modal2.innerHTML="¡Solicitud Realizada con exito! Pronto se enviará respuesta a su solicitud"
                    men.appendChild(modal2)
                }, 1000);
                
                console.log("¡Solicitud Realizada con exito! Pronto se enviará respuesta a su solicitud");

                sendRecuest(inputNombre.value, inputID.value, inputSede.value, inputLaptopCode.value,
                inputFechaS.value, inputFechaR.value, "Pendiente")

            }         
        })       
    }

  

