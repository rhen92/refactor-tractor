class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filterRecipesByTag() {
    return this.recipeData.filter(recipe => recipe.tags.includes(tag));
  }

  filterRecipesByIngredient(keyword) {
    return this.recipeData.filter(recipe => recipe.ingredients.includes(keyword));
  }

  filterRecipesByName(keyword) {
   return this.recipeData.filter(recipe => recipe.name.includes(keyword));
  }
}

module.exports = RecipeRepository;