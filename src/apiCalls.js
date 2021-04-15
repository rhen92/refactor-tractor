export const userGET = () => fetch('http://localhost:3001/api/v1/users')
  .then(response => response.json()).catch(err => console.log('ERROR'));

export const ingredientsGet = () => fetch('http://localhost:3001/api/v1/ingredients')
  .then(response => response.json()).catch(err => err.message);
