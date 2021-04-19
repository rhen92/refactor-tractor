class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData;
  }

  filterRecipesByTag(keyword) {
    return this.recipeList.filter(recipe => recipe.tags.includes(keyword));
  }

  filterRecipesByName(keyword) {
    const nameList = this.recipeList.map(rec => rec.name);
    const filteredNameList = nameList.filter(name => name.toLowerCase().includes(keyword.toLowerCase()));
    return this.recipeList.filter(recipe => recipe.name.split().some(word => filteredNameList.includes(word)));
  }

  filterRecipesByIngredient(keyword) {
    const ingredientList = this.recipeList.map(rec => rec.ingredientData.map(ing => ing.name)).flat();
    const filteredIngredientList = ingredientList.filter(ing => ing.includes(keyword.toLowerCase()));
    return this.recipeList.filter(recipe => recipe.ingredientData.some(ingredient => filteredIngredientList.includes(ingredient.name)))
  }
}

module.exports = RecipeRepository;
