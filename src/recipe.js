class Recipe {
  constructor(recipe, ingredientData) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
    this.ingredientData = ingredientData.filter(data => this.ingredients.some(ingredient => ingredient.id === data.id))
  }
  
  calculateIngredientsCost() {
    const sortedIngredients = this.ingredients.sort((a, b) => a.id - b.id)
    const sortedIngredientData = this.ingredientData.sort((a, b) => a.id - b.id)
    return sortedIngredientData.reduce((counter, ingredient, index) => {
      return (counter + ((ingredient.estimatedCostInCents / 100) * sortedIngredients[index].quantity.amount))
    }, 0)
  }
}

module.exports = Recipe;