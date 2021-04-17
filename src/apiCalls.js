import User from './user';

let users;
let ingredientData;
let recipeData;

const usersGET = () => fetch('http://localhost:3001/api/v1/users')
.then(response => response.json())
.then(data => users = data.map(point => new User(point)))
.catch(err => err.message);

const ingredientsGET = () => fetch('http://localhost:3001/api/v1/ingredients')
.then(response => response.json())
.then(data => ingredientData = data)
.catch(err => err.message);

const recipesGET = () => fetch('http://localhost:3001/api/v1/recipes')
.then(response => response.json())
.then(data => recipeData = data)
.catch(err => err.message);

usersGET();
ingredientsGET();
recipesGET();

export { users, ingredientData, recipeData }