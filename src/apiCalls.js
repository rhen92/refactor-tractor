export const userGET = () => fetch('http://localhost:3001/api/v1/users')
  .then(response => response.json()).catch(err => console.log('ERROR'));

export const ingredientsGET = () => fetch('http://localhost:3001/api/v1/ingredients')
  .then(response => response.json()).catch(err => 'Ingredient Data ERROR');

export const recipeGET = () => fetch('http://localhost:3001/api/v1/recipes')
  .then(response => response.json()).catch(err => console.log('Recipe Error!'));
