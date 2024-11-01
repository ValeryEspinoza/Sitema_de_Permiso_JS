async function GetRecuest() {
 
    try {
        const response = await fetch(`http://localhost:3003/Recuest`);
        const data = await response.json();
        console.log(data);
        
        return data
        
    } catch (error) {
        console.error(error);
    }
}


export { GetRecuest }


async function GetRecuestFromHistory() {
 
    try {
        const response = await fetch(`http://localhost:3003/History`);
        const data = await response.json();
        console.log(data);
        
        return data
        
    } catch (error) {
        console.error(error);
    }
}


export { GetRecuestFromHistory }

async function GetRecuestFromAcepted() {
 
    try {
        const response = await fetch(`http://localhost:3003/AceptedRecuest`);
        const data = await response.json();
        console.log(data);
        
        return data
        
    } catch (error) {
        console.error(error);
    }
}


export { GetRecuestFromAcepted}