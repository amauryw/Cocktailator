import axios from "axios";

export const fetchCocktailsByName = async name => {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${name}`
    );
    return response.data.drinks;
  } catch (error) {
    console.log("error on fetchCocktailsByName", { error });
  }
};
