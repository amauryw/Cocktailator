import axios from "axios";

export const fetchCocktailsByIngredientName = async name => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
  );
  return response.data.drinks;
};

export const fetchCocktailByID = async id => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return response.data.drinks;
};
