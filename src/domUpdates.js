import {
  user,
  recipes,
  recipeRepo
} from './scripts'

const displayWelcome = () => {
  let firstName = user.name.split(' ')[0];
  let welcomeMsg = `
    <div class="welcome-msg">
      <h1>Welcome ${firstName}!</h1>
    </div>`;
  document.querySelector('.banner-image').insertAdjacentHTML('afterbegin',
    welcomeMsg);
}

function displayPantryInfo(pantry) {
  pantry.forEach(ingredient => {
    let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
      <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
    document.querySelector('.pantry-list').insertAdjacentHTML('beforeend',
      ingredientHtml);
  });
}

export { displayWelcome, displayPantryInfo }