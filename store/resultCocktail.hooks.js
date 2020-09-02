import { useContext } from "react";
import { FavoriteContext } from "./resultCocktail.context";
import { fetchCocktails } from "../api/cocktails.api";
import { adaptApiCocktailToCocktails } from "./resultCocktail.adapter";

export const useFavoriteStore = () => {
  const [state, setState] = useContext(FavoriteContext);
  const myFavoriteCocktails = state.myFavoriteCocktails;

  const isLoading = state.isLoading;

  const loadCocktails = async (search, type) => {
    try {
      setState({ ...state, isLoading: true });
      const apiFetchedCockails = await fetchCocktails(search, type);
      const cocktails = adaptApiCocktailToCocktails(apiFetchedCockails);
      setState({ ...state, myFavoriteCocktails: cocktails, isLoading: false });
    } catch (error) {
      setState({ ...state, isLoading: false, myFavoriteCocktails: [] });
    }
  };

  return { myFavoriteCocktails, loadCocktails, isLoading };
};
