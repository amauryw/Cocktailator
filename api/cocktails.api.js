import axios from "axios";

export const fetchCocktailsByIngredientName = async name => {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
    );
    return response.data.drinks;
  } catch (error) {
    console.log("error on fetchCocktailsByIngredientName", { error });
  }
};
