class RecipeRepository {
  constructor(recipeData) {
    this.recipeList = recipeData;
  }

  filterRecipesByTag(keyword) {
    return this.recipeList.filter(recipe => recipe.tags.includes(keyword));
  }

  filterRecipesByName(keyword) {
    const nameList = this.recipeList.map(rec => rec.name).map(title => title.split(' ')).flat();
    const filteredNameList = nameList.filter(name => name.toLowerCase().includes(keyword.toLowerCase()));
    return this.recipeList.filter(recipe => recipe.name.split(' ').some(word => filteredNameList.includes(word)))
  }

  filterRecipesByIngredient(keyword) {
    const ingredientList = this.recipeList.map(rec => rec.ingredientData).flat().map(ing => ing.name)
    const filteredIngredientList = ingredientList.filter(ing => ing.includes(keyword.toLowerCase()))
    return this.recipeList.filter(recipe => recipe.ingredientData.some(ingredient => filteredIngredientList.includes(ingredient.name)))
  }
}

module.exports = RecipeRepository;
