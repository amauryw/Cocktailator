export const adaptApiCocktailToCocktails = apiCocktails => {
  return apiCocktails.map(apiCocktail => formatCocktail(apiCocktail));
};


const formatCocktail = (cocktail) => {
  return {
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    imagePath:
      cocktail.strDrinkThumb ||
      "https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg"
  }
}
