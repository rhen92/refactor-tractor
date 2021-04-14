import { expect } from 'chai';

import Recipe from '../src/recipe';
import data from '../src/data/recipe-data';
import ingredientData from '../src/data/ingredient-data.js';

describe('Recipe', function() {
  let recipe;
  let recipeInfo;
  let ingredients;

  beforeEach(function() {
    recipeInfo = data[0];
    ingredients = ingredientData;
    recipe = new Recipe(recipeInfo, ingredients);
  })

  it('is a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should initialize with an id', function() {
    expect(recipe.id).to.eq(595736);
  });

  it('should initialize with an name', function() {
    expect(recipe.name).to.eq('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should initialize with an image', function() {
    expect(recipe.image).to.eq('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('should initialize with an array of ingredients', function() {
  //  expect(recipe.ingredients).to.deep.eq(recipeInfo.ingredients);
  });

  it('should calculate the total cost of all of the ingredients', function() {

    expect(recipe.calculateIngredientsCost(ingredientData)).to.eq();
  });
});
