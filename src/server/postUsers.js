


async function postUsers(Nombres, Apellidos,Correo,Contraseña,Cedula, Roll) {

    try {
        const newlist = {
            Nombres,
            Apellidos,
            Correo,
            Contraseña,
            Cedula,
            Roll
        }

        const response = await fetch("http://localhost:3003/Users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newlist)
        });

        return await response.json();

    } catch (error) {
        console.error('Error al publicar :', error);
        throw error;
    }
    
}


export {postUsers}
