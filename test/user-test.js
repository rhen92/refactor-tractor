import { expect } from 'chai';
import User from '../src/user';
import data from '../src/data/users-data';

describe('User', () => {
  let user;
  let userInfo;
  let recipe;

  beforeEach(() => {
    userInfo = data[0];
    user = new User(userInfo)

    recipe = {
      name: 'Chicken Parm',
      tags: ['italian', 'dinner']
    };

  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should initialize with an id', () => {
    expect(user.id).to.equal(1);
  });

  it('should initialize with a name', () => {
    expect(user.name).to.equal('Saige O\'Kon');
  });

  it('should initialize with a pantry', () => {
    expect(user.pantry[0].ingredient).to.equal(11477);
  });

  it('should initialize with an empty favoriteRecipes array', () => {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should initialize with an empty recipesToCook array', () => {
    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('should be able to save a recipe to favoriteRecipes', () => {
    user.saveRecipe(recipe);
    expect(user.favoriteRecipes[0].name).to.equal('Chicken Parm');
  });

  it('should be able to decide to cook a recipe', () => {
    user.decideToCook(recipe);
    expect(user.recipesToCook[0].name).to.equal('Chicken Parm');
  });

  it('should be able to filter recipes by tag', () => {
    user.saveRecipe(recipe);
    expect(user.filterRecipesByTag('italian')).to.deep.equal([recipe]);
  });

  it('should be able to search recipes by name', () => {
    user.saveRecipe(recipe);
    expect(user.searchForRecipeByIngredient('Chicken Parm')).to.deep.equal([recipe]);
  });
});