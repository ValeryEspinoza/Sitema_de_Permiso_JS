
async function getUsers() {
  try {
      const response = await fetch('http://localhost:3003/Users', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
          throw new Error('Error al Buscar Usuario');
      }

      const users = await response.json();
      return users;
  } catch (error) {
      console.error('Error al Buscar Usuario:', error);
      throw error;
  }
}

export {getUsers};