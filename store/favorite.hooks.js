import { useContext } from "react";
import { FavoriteContext } from "./favorite.context";
import { fetchCocktailsByIngredientName } from "../api/cocktails.api";
import { adaptApiCocktailToCocktails } from "./favorite.adapter";

export const useFavoriteStore = () => {
  const [state, setState] = useContext(FavoriteContext);
  const myFavoriteCocktails = state.myFavoriteCocktails;

  const isLoading = state.isLoading;

  const loadCocktails = async name => {
    try {
      setState({ ...state, isLoading: true });
      const apiFetchedCockails = await fetchCocktailsByIngredientName(name);
      console.log("apiFetch", apiFetchedCockails);
      const cocktails = adaptApiCocktailToCocktails(apiFetchedCockails);
      setState({ ...state, myFavoriteCocktails: cocktails, isLoading: false });
    } catch (error) {
      setState({ ...state, isLoading: false, myFavoriteCocktails: [] });
    }
  };

  return { myFavoriteCocktails, loadCocktails, isLoading };
};
