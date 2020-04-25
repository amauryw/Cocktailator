import { useContext } from "react";
import { FavoriteContext } from "./favorite.context";
import { fetchCocktailsByIngredientName } from "../api/cocktails.api";
import { adaptApiCocktailToCocktails } from "./favorite.adapter";

export const useFavoriteStore = () => {
  const [state, setState] = useContext(FavoriteContext);
  const myFavoriteCocktails = state.myFavoriteCocktails;

  const isLoading = state.isLoading;
  const hasErrored = state.hasErrored;

  const loadCocktails = async name => {
    try {
      setState({ ...state, isLoading: true, hasErrored: false });
      const apiFetchedCockails = await fetchCocktailsByIngredientName(name);
      const cocktails = adaptApiCocktailToCocktails(apiFetchedCockails);
      setState({ ...state, myFavoriteCocktails: cocktails, isLoading: false });
    } catch (error) {
      setState({ ...state, hasErrored: true, isLoading: false });
    }
  };

  return { myFavoriteCocktails, loadCocktails, isLoading, hasErrored };
};
