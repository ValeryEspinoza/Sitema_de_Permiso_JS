
async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3003/Recuest/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `Usuario con id ${id} ha sido eliminado correctamente` };
    } catch (error) {
        console.error('Error eliminando id:', error);
        throw error;
    }
}

export { deleteUser };







async function deleteUserHistory(id) {
    try {
        const response = await fetch(`http://localhost:3003/History/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `Usuario con id ${id} ha sido eliminado correctamente` };
    } catch (error) {
        console.error('Error eliminando id:', error);
        throw error;
    }
}

export { deleteUserHistory };


async function deleteUserAcepted(id) {
    try {
        const response = await fetch(`http://localhost:3003/AceptedRecuest/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `Usuario con id ${id} ha sido eliminado correctamente` };
    } catch (error) {
        console.error('Error eliminando id:', error);
        throw error;
    }
}

export { deleteUserAcepted };



async function deleteHistory(id) {
    
    try {
        const response = await fetch(`http://localhost:3003/History/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `Usuario con id ${id} ha sido eliminado correctamente` };
    } catch (error) {
        console.error('Error eliminando id:', error);
        throw error;
    }
}

export { deleteHistory };