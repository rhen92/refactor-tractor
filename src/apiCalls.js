export const userGET = () => fetch('http://localhost:3001/api/v1/users')
  .then(response => response.json()).catch(err => console.log('User Data ERROR'));

export const ingredientsGET = () => fetch('http://localhost:3001/api/v1/ingredients')
  .then(response => response.json()).catch(err => console.log('Ingredient Data ERROR'));
