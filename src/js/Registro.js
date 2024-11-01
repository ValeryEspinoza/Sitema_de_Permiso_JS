import { getUsers } from "../server/getUsers"
import {postUsers} from "../server/postUsers"

const Nombres = document.getElementById("Nombres")
const Apellidos = document.getElementById("Apellidos")
const Correo = document.getElementById("Correo")
const Contraseña = document.getElementById("Contraseña")
const Cedula = document.getElementById("Cedula")
const boton = document.getElementById("boton")
const Roll = document.getElementById("Roll")
const texto = document.getElementById("texto")

let valida=0


boton.addEventListener("click",function () { 
    
  if ( Contraseña.value === "" || Nombres.value === ""   || Apellidos.value === "" || Correo.value === "" || Cedula.value === "") {
        
    
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No llenaste todos los espacios!"
        });

      
      }else{
        Usuarios();
        async function Usuarios () {
        
            const listaUsuarios = await getUsers() 
           
          console.log(listaUsuarios);
  
            
          for (let index = 0; index < listaUsuarios.length; index++) {
          
            
            if (listaUsuarios[index].Correo === Correo.value) {
  
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Este Correo o Contraseña ya se encuentra registrado!"
              });
              
              valida++
              
            }
            
            
          }
  
  
          if (valida===0) {
            
            console.log((Nombres.value, Apellidos.value, Correo.value, Contraseña.value, Cedula.value, Roll.value));
          
            postUsers(Nombres.value, Apellidos.value, Correo.value, Contraseña.value, Cedula.value, Roll.value)
  
            Swal.fire({
              title: "Registro Exitoso!",
              text: "Te haz registrado Exitosamente!",
              icon: "success"
            });
           
          
          }
  
          valida=0
        
        
      }
      }

})
