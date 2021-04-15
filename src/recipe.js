class Recipe {
  constructor(recipe, ingredientData) {
    console.log(ingredientData)
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
      let dollarAmount = ingredient.estimatedCostInCents / 100;
      let quantity = sortedIngredients[index].quantity.amount;
      return counter + (dollarAmount * quantity)
    }, 0)
  }
}

module.exports = Recipe;
