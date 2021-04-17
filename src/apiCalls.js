import User from './user';

let users = [];
let ingredientData = [];
let recipeData = [];

const usersGET = () => fetch('http://localhost:3001/api/v1/users')
.then(response => response.json())
.then(data => data.map(point => new User(point)))
.then(user => users.push(user))
.catch(err => console.log('User Data ERROR'));

const ingredientsGET = () => fetch('http://localhost:3001/api/v1/ingredients')
.then(response => response.json())
.then(data => data.forEach(point => ingredientData.push(point)))
.catch(err => 'Ingredient Data ERROR');

const recipesGET = () => fetch('http://localhost:3001/api/v1/recipes')
.then(response => response.json())
.then(data => data.forEach(point => recipeData.push(point)))
.catch(err => console.log('Recipe Error!'));

usersGET();
ingredientsGET();
recipesGET();

export { users, ingredientData, recipeData }