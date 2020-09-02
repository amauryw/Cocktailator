import { useContext } from "react";
import { FavoriteCocktailContext } from "./favorite.context";

export const useFavoriteCocktailStore = () => {
  const [state, setState] = useContext(FavoriteCocktailContext);
  const myFavoriteCocktails = state.myFavoriteCocktails;

  const isLoading = state.isLoading;

  const loadFavoriteCocktails = async () => {
    try {
      setState({ ...state, isLoading: true });
      setState({ ...state, myFavoriteCocktails: [], isLoading: false });
    } catch (error) {
      setState({ ...state, isLoading: false, myFavoriteCocktails: [] });
    }
  };

  return { myFavoriteCocktails, loadFavoriteCocktails, isLoading };
};
