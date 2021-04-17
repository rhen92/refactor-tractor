// OLD SCHOOL WAY FOR REFERENCE ON WHAT PAGE SHOULD DO 👇
import User from './User'
import users from './data/users-data';
import ingredientData from './data/ingredient-data';
import recipeData from './data/recipe-data';

// NEW SCHOOL WAY THAT STOPS WORKING WHEN CLICK EVENT HAPPENS 👇
// import {
//   users,
//   ingredientData,
//   recipeData,
//   usersGET,
//   ingredientsGET,
//   recipesGET
// } from './apiCalls'

import Recipe from './Recipe';
import RecipeRepository from './RecipeRepository'

// Use this to see the difference between call stack vs. async task queue 👇
// console.log(users);
// setTimeout(() => console.log(users), 3000);

import './images/apple-logo.png'
import './images/apple-logo-outline.png'
import './images/chicken-parm.jpg'
import './images/cookbook.png'
import './images/green-apples.jpg'
import './images/pancakes.jpg'
import './images/search.png'
import './images/seasoning.png'
import './css/base.scss';
import './css/styles.scss';

let pantryMenuOpen = false;
let user;
let recipes;
let recipeRepo;
const fullRecipeInfo = document.querySelector('.recipe-instructions');
const pantryInfo = [];
const searchForm = document.querySelector('#search');
const buttons = {
  allRecipes: document.querySelector('.show-all-btn'),
  filter: document.querySelector('.filter-btn'),
  pantry: document.querySelector('.my-pantry-btn'),
  savedRecipes: document.querySelector('.saved-recipes-btn'),
  search: document.querySelector('.search-btn'),
  showPantryRecipes: document.querySelector('.show-pantry-recipes-btn'),
}

// just for testing to see what event target is 🎯 👇
// window.addEventListener('click', (event) => console.log(event.target))

window.addEventListener('load', onLoad);
window.addEventListener('click', (event) => clickHandlers(event))
searchForm.addEventListener('submit', (event) => searchRecipes(event));

function onLoad() {
  generateUser();
  generateRecipes();
  createCards();
  findTags();
}

function clickHandlers(event) {
  switch (event.target) {
    case buttons.allRecipes:
      showAllRecipes()
      break;
    case buttons.filter:
      findCheckedBoxes()
      break;
    case buttons.pantry:
      togglePantryMenu()
      break;
    case buttons.savedRecipes:
      showSavedRecipes()
      break;
    case buttons.search:
      searchRecipes(event)
      break;
    case buttons.showPantryRecipes:
      findCheckedPantryBoxes()
      break;
    default:
      recipeCardManagement(event)
      break;
  }
}

// GENERATE A USER ON LOAD
function generateUser() {
  // USE WHEN BRINGING BACK USER DATA W/ API CALLS 👇
  // user = users[Math.floor(Math.random() * users.length)];
  user = new User(users[Math.floor(Math.random() * users.length)]);
  let firstName = user.name.split(' ')[0];
  let welcomeMsg = `
    <div class="welcome-msg">
      <h1>Welcome ${firstName}!</h1>
    </div>`;
  document.querySelector('.banner-image').insertAdjacentHTML('afterbegin',
    welcomeMsg);
  findPantryInfo();
}

function generateRecipes() {
  recipes = recipeData.map(recipe => new Recipe(recipe, ingredientData));
  recipeRepo = new RecipeRepository(recipes);
}


// CREATE RECIPE CARDS
function createCards() {
  recipes.forEach(recipe => {
    let shortRecipeName = recipe.name;
    if (recipe.name.length > 40) {
      shortRecipeName = recipe.name.substring(0, 40) + '...';
    }
    addRecipeCardToDom(recipe, shortRecipeName)
  });
}

function addRecipeCardToDom(recipe, shortRecipeName) {
  const main = document.querySelector('main');
  let cardHtml = `
    <div class="recipe-card" id="${recipe.id}">
      <h3 maxlength="40">${shortRecipeName}</h3>
      <div class="card-photo-container">
        <img src="${recipe.image}" class="card-photo-preview" alt="${recipe.name} recipe" title="${recipe.name} recipe">
        <div class="text">
          <div>Click for Instructions</div>
        </div>
      </div>
      <h4>${recipe.tags[0]}</h4>
      <img src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
    </div>`
  main.insertAdjacentHTML('beforeend', cardHtml);
}

// FILTER BY RECIPE TAGS
function findTags() {
  let tags = [];
  let recipeTagLists = recipes.map(recipe => recipe.tags);
  recipeTagLists.forEach(tagList => {
    tags.push(...tagList.filter(tag => !tags.includes(tag)))
  });
  tags.sort();
  listTags(tags);
}

function listTags(allTags) {
  const tagList = document.querySelector('.tag-list');
  allTags.forEach(tag => {
    let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
      <label for="${tag}">${capitalize(tag)}</label></li>`;
    tagList.insertAdjacentHTML('beforeend', tagHtml);
  });
}

function capitalize(words) {
  return words.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll('.checked-tag');
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
  renderShowAllRecipesBanner();
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let allRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  });
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}

function filterRecipes(filtered) {
  let foundRecipes = recipes.filter(recipe => {
    return !filtered.includes(recipe);
  });
  hideUnselectedRecipes(foundRecipes)
}

function hideUnselectedRecipes(foundRecipes) {
  foundRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = 'none';
  });
}

function recipeCardManagement(event) {
  switch (true) {
    case event.target.className === 'card-apple-icon':
      addRecipeToFavorites(event);
      break;
    case isDescendant(event.target.closest('.recipe-card'), event.target):
      openRecipeInfo(event);
      break;
    case event.target.id === 'exit-recipe-btn':
      exitRecipe();
      break
  }
}

function addRecipeToFavorites(event) {
  let cardId = parseInt(event.target.closest('.recipe-card').id)
  if (!user.favoriteRecipes.includes(cardId)) {
    event.target.src = '../images/apple-logo.png';
    user.saveRecipe(cardId);
  } else {
    event.target.src = '../images/apple-logo-outline.png';
    user.removeRecipe(cardId);
  }
}

function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
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

// CREATE RECIPE INSTRUCTIONS
function openRecipeInfo(event) {
  fullRecipeInfo.style.display = 'inline';
  let recipeId = event.path.find(e => e.id).id;
  let recipe = recipeData.find(recipe => recipe.id === Number(recipeId));
  generateRecipeTitle(recipe, generateIngredients(recipe));
  addRecipeImage(recipe);
  generateInstructions(recipe);
  fullRecipeInfo.insertAdjacentHTML('beforebegin', '<section id="overlay"></div>');
}

function generateRecipeTitle(recipe, ingredients) {
  let recipeTitle = `
    <button id="exit-recipe-btn">X</button>
    <h3 id="recipe-title">${recipe.name}</h3>
    <h4>Ingredients</h4>
    <p>${ingredients}</p>`
  fullRecipeInfo.insertAdjacentHTML('beforeend', recipeTitle);
}

function addRecipeImage(recipe) {
  document.getElementById('recipe-title').style.backgroundImage = `url(${recipe.image})`;
}

function generateIngredients(recipe) {
  return recipe && recipe.ingredients.map(i => {
    return `${capitalize(i.name)} (${i.quantity.amount} ${i.quantity.unit})`
  }).join(', ');
}

function generateInstructions(recipe) {
  let instructionsList = '';
  let instructions = recipe.instructions.map(i => {
    return i.instruction
  });
  instructions.forEach(i => {
    instructionsList += `<li>${i}</li>`
  });
  fullRecipeInfo.insertAdjacentHTML('beforeend', '<h4>Instructions</h4>');
  fullRecipeInfo.insertAdjacentHTML('beforeend', `<ol>${instructionsList}</ol>`);
}

function exitRecipe() {
  while (fullRecipeInfo.firstChild &&
    fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
  fullRecipeInfo.style.display = 'none';
  document.getElementById('overlay').remove();
}

// TOGGLE DISPLAYS
function renderShowAllRecipesBanner() {
  document.querySelector('.welcome-msg').style.display = 'none';
  document.querySelector('.my-recipes-banner').style.display = 'block';
}

function showWelcomeBanner() {
  document.querySelector('.welcome-msg').style.display = 'flex';
  document.querySelector('.my-recipes-banner').style.display = 'none';
}

// SEARCH RECIPES

function searchRecipes(event) {
  event.preventDefault();
  const searchInput = document.querySelector('#search-input');
  showAllRecipes();
  const names = recipeRepo.filterRecipesByName(searchInput.value.toLowerCase());
  const ingredients = recipeRepo.filterRecipesByIngredient(searchInput.value.toLowerCase());
  let searchedRecipes = [...names, ...ingredients]
  filterNonSearched(searchedRecipes);
  renderShowAllRecipesBanner();
}

function filterNonSearched(filtered) {
  let found = recipes.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  hideUnselectedRecipes(found);
}

// function createRecipeObject(recipes) {
//   recipes = recipes.map(recipe => new Recipe(recipe, ingredientData));
//   return recipes
// }

function togglePantryMenu() {
  var menuDropdown = document.querySelector('.drop-menu');
  pantryMenuOpen = !pantryMenuOpen;
  if (pantryMenuOpen) {
    menuDropdown.style.display = 'block';
  } else {
    menuDropdown.style.display = 'none';
  }
}

function showAllRecipes() {
  recipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = 'block';
  });
  showWelcomeBanner();
}

// CREATE AND USE PANTRY
function findPantryInfo() {
  user.pantry.forEach(item => {
    let itemInfo = ingredientData.find(ingredient => {
      return ingredient.id === item.ingredient;
    });
    let originalIngredient = pantryInfo.find(ingredient => {
      if (itemInfo) {
        return ingredient.name === itemInfo.name;
      }
    });
    if (itemInfo && originalIngredient) {
      originalIngredient.count += item.amount;
    } else if (itemInfo) {
      pantryInfo.push({
        name: itemInfo.name,
        count: item.amount
      });
    }
  });
  displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
}

function displayPantryInfo(pantry) {
  pantry.forEach(ingredient => {
    let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
      <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
    document.querySelector('.pantry-list').insertAdjacentHTML('beforeend',
      ingredientHtml);
  });
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll('.pantry-checkbox');
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
    renderShowAllRecipesBanner();
  }
}

function findRecipesWithCheckedIngredients(selected) {
  let recipeChecker = (arr, target) => target.every(v => arr.includes(v));
  let ingredientList = selected.map(item => {
    return item.id;
  })
  recipes.forEach(recipe => {
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.name);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientList)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = 'none';
    }
  })
}