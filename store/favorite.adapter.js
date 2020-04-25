export const adaptApiCocktailToCocktails = apiCocktails => {
  return apiCocktails.map(apiCocktail => ({
    id: apiCocktail.idDrink,
    name: apiCocktail.strDrink,
    imagePath:
      apiCocktail.strDrinkThumb ||
      "https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg"
  }));
};
