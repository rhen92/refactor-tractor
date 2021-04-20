import { expect } from 'chai';
import RecipeRepository from '../src/RecipeRepository';
import Recipe from '../src/recipe';
import recipeData from './test-data/sample-recipe-data';
import ingredientData from './test-data/sample-ingredient-data';

describe('RecipeRepository', () => {
  let recipes, recipeRepository;

  beforeEach(() => {
    recipes = recipeData.map(recipe => new Recipe(recipe, ingredientData))
    recipeRepository = new RecipeRepository(recipes);
  });

  it('is a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  });

  it('should be able to filter recipes by tag', () => {
    expect(recipeRepository.filterRecipesByTag('antipasti')).to.deep.equal([recipeRepository.recipeList[0]]);
  });

  it('should be able to search recipes by name', () => {
    expect(recipeRepository.filterRecipesByName('Loaded Chocolate')).to.deep.equal([recipeRepository.recipeList[0]]);
  });

  it('should be able to search recipes by ingredient', () => {
    expect(recipeRepository.filterRecipesByIngredient('egg')).to.deep.equal([recipeRepository.recipeList[0]]);
  });
})
