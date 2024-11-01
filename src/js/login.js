import { getUsers } from "../server/getUsers"


const Correo = document.getElementById("Correo")
const Contraseña = document.getElementById("Contraseña")
const boton = document.getElementById("boton")
const texto = document.getElementById("texto")





boton.addEventListener("click",function () {
  
  
    Usuarios()

    async function Usuarios() {
    
        let newUsuarios = await getUsers() 
       
        console.log(newUsuarios);
       
        for (let index = 0; index < newUsuarios.length; index++) {
            if ( Correo.value === "" || Contraseña.value === "") {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No llenaste todos los espacios!"
                  });
        
                
                 
              }else{
                
                
                
             if ( newUsuarios[index].Correo === Correo.value &&  newUsuarios[index].Contraseña === Contraseña.value) {
                    getUsers(Correo.value, Contraseña.value )
                    
                  
                    let usu = newUsuarios[index]
                    localStorage.setItem("usuario",JSON.stringify(usu))
                 



                    Swal.fire({
                      title: "Ingreso Exitoso!",
                      text: "En unos segundos serás enviado a la página principal!",
                      icon: "success"                         
                    });

                   window.location.href="http://localhost:1234/index.html"

            }else{
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Usuario o contraseña no estan validos !"
                  });
                
            }}
           
            
            
        } 
    }
}) 











