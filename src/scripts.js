import {
  users,
  ingredientData,
  recipeData,
} from './apiCalls'

import {
  renderWelcome,
  displayPantryInfo,
  addRecipeCardToDom,
  listTags,
  hideUnselectedRecipes,
  showSavedRecipes,
  renderShowAllRecipesBanner,
  generateRecipeTitle,
  addRecipeImage,
  exitRecipe,
  togglePantryMenu,
  showAllRecipes,
  generateInstructions,
  recipeInfoOverlay,
  isDescendant,
  addRecipeToFavorites
} from './domUpdates'

import Recipe from './Recipe';
import RecipeRepository from './RecipeRepository'

import './images/apple-logo.png'
import './images/apple-logo-outline.png'
import './images/chicken-parm.jpg'
import './images/cookbook.png'
import './images/green-apples.jpg'
import './images/pancakes.jpg'
import './images/search.png'
import './images/seasoning.png'
import './css/index.scss';

let user;
let recipes;
let recipeRepo;
const fullRecipeInfo = document.querySelector('.recipe-instructions');
const pantryInfo = [];
const searchForm = document.querySelector('#search');
const buttons = {
  allRecipes: document.querySelector('.show-all-btn'),
  filter: document.querySelector('.filter-btn'),
  pantry: document.querySelector('#pantry-btn'),
  savedRecipes: document.querySelector('#saved-recipes-btn'),
  search: document.querySelector('.search-btn'),
  showPantryRecipes: document.querySelector('.show-pantry-recipes-btn'),
}

window.addEventListener('load', onLoad);
window.addEventListener('click', clickHandlers);
window.addEventListener('keyup', addRecipeToFavorites);
searchForm.addEventListener('submit', searchRecipes);

function onLoad() {
  generateUser();
  generateRecipes();
  renderWelcome();
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
async function generateUser() {
  user = users[Math.floor(Math.random() * users.length)];
  findPantryInfo();
}

// GENERATE RECIPES ON LOAD
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

// CONTROL RECIPE CARD INTERACTIONS
function recipeCardManagement(event) {
  switch (true) {
    case event.target.className === 'card-apple-icon':
      addRecipeToFavorites(event);
      break;
    case isDescendant(event.target.closest('.recipe-card'), event.target):
      openRecipeInfo(event);
      break;
    case event.target.id === 'close':
      exitRecipe();
      break
  }
}

// CREATE RECIPE INSTRUCTIONS
function openRecipeInfo(event) {
  fullRecipeInfo.style.display = 'inline';
  let recipeId = event.path.find(e => e.id).id;
  let recipe = recipeData.find(recipe => recipe.id === Number(recipeId));
  generateRecipeTitle(recipe, generateIngredients(recipe), event);
  addRecipeImage(recipe);
  generateInstructions(recipe);
  recipeInfoOverlay(fullRecipeInfo)
}

function generateIngredients(recipe) {
  let ingredients = recipe.ingredients.sort((a, b) => a - b);
  let ingredientNames = ingredients.map(ing => ingredientData.filter(i => i.id === ing.id).map(i => capitalize(i.name)).toString());
  return ingredients.map((ing, index) => {
    return `${ingredientNames[index]} (${ing.quantity.amount} ${ing.quantity.unit})`
  }).join(', ');
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
    recipe.ingredientData.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.name);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientList)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = 'none';
    }
  })
}

export {
  user,
  recipes,
  recipeRepo,
  capitalize,
  fullRecipeInfo,
  buttons,
}