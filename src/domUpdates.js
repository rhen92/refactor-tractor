import {
  user,
  recipes,
  recipeRepo,
  capitalize,
  fullRecipeInfo
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

function addRecipeCardToDom(recipe, shortRecipeName) {
  const main = document.querySelector('main');
  let cardHtml = `
    <article tabindex="0" class="recipe-card" id="${recipe.id}">
      <h3 maxlength="40">${shortRecipeName}</h3>
      <div class="card-photo-container">
        <img src="${recipe.image}" class="card-photo-preview" alt="${recipe.name} recipe" title="${recipe.name} recipe">
        <button class="text">
          <a>Click for Instructions</a>
        </button>
      </div>
      <h4>${recipe.tags[0]}</h4>
      <img tabindex="0" src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
    </article>`
  main.insertAdjacentHTML('beforeend', cardHtml);
}

function listTags(allTags) {
  const tagList = document.querySelector('.tag-list');
  allTags.forEach(tag => {
    let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
      <label for="${tag}">${capitalize(tag)}</label></li>`;
    tagList.insertAdjacentHTML('beforeend', tagHtml);
  });
}

function hideUnselectedRecipes(foundRecipes) {
  foundRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = 'none';
  });
}

function showSavedRecipes() {
  let unsavedRecipes = recipes.filter(recipe => {
    return !user.favoriteRecipes.includes(recipe.id);
  });
  unsavedRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = 'none';
  });
  renderShowAllRecipesBanner();
}

function renderShowAllRecipesBanner() {
  document.querySelector('.welcome-msg').style.display = 'none';
  document.querySelector('.my-recipes-banner').style.display = 'block';
}

function generateRecipeTitle(recipe, ingredients, event) {
  let recipeTitle = `
    <button id="close" aria-label="close">X</button>
    <h3 id="recipe-title">${recipe.name}</h3>
    <h4>Ingredients</h4>
    <p>${ingredients}</p>`
  fullRecipeInfo.insertAdjacentHTML('beforeend', recipeTitle);
  const close = document.getElementById('close');
  close.focus();
  close.addEventListener('keydown', function (event) {
    if (event.keyCode === 9) {
      event.preventDefault();
    }
  })
}

function addRecipeImage(recipe) {
  document.getElementById('recipe-title').style.backgroundImage = `url(${recipe.image})`;
}

function exitRecipe() {
  while (fullRecipeInfo.firstChild &&
    fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
  fullRecipeInfo.style.display = 'none';
  document.getElementById('overlay').remove();
}

export { displayWelcome, displayPantryInfo, addRecipeCardToDom, listTags, hideUnselectedRecipes, showSavedRecipes, renderShowAllRecipesBanner, generateRecipeTitle, addRecipeImage, exitRecipe }