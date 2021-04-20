import { expect } from 'chai';

import Recipe from '../src/recipe';
import recipeData from './test-data/sample-recipe-data';
import ingredientData from './test-data/sample-ingredient-data'

describe('Recipe', () => {
  let recipe, recipeInfo, ingredientInfo;

  beforeEach(() => {
    recipeInfo = recipeData[0];
    ingredientInfo = ingredientData;
    recipe = new Recipe(recipeInfo, ingredientInfo);
  })

  it('is a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should initialize with an id', () => {
    expect(recipe.id).to.eq(595736);
  });

  it('should initialize with an name', () => {
    expect(recipe.name).to.eq('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should initialize with an image', () => {
    expect(recipe.image).to.eq('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('should initialize with an array of ingredients', () => {
    expect(recipe.ingredients).to.deep.eq(recipeInfo.ingredients);
  });

  it('should calculate the total cost of all of the ingredients', () => {
    expect(recipe.calculateIngredientsCost()).to.eq(177.76);
  });
});
