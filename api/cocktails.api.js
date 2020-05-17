import axios from "axios";

export const fetchCocktails = async (search, type) => {
  let uri;
  switch (type) {
    case 'ingredient':
      uri = "https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=";
      break;
    case 'random':
      uri = "https://www.thecocktaildb.com/api/json/v2/1/random.php";
      break;
    case 'name':
      uri = "https://www.thecocktaildb.com/api/json/v2/1/search.php?s=";
      break;
  }
  const response = await axios.get(
    `${uri}${search}`
  );
  return response.data.drinks;
};

export const fetchCocktailsByIngredientName = async (name) => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=${name}`
  );
  return response.data.drinks;
};

export const fetchCocktailByID = async id => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=${id}`
  );
  return response.data.drinks;
};