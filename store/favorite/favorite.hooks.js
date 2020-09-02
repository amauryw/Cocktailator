import { useContext } from "react";
import { FavoriteCocktailContext } from "./favorite.context";
import { FAVORITE_COCKTAILS, getItem, setItem } from "../../libs/asyncStorage";

export const useFavoriteCocktailStore = () => {
  const [state, setState] = useContext(FavoriteCocktailContext);
  const myFavoriteCocktails = state.myFavoriteCocktails;

  const isLoading = state.isLoading;

  const loadFavoriteCocktails = async () => {
    try {
      setState({ ...state, isLoading: true });
      const favoriteCocktail = await getItem(FAVORITE_COCKTAILS, "array");
      setTimeout(
        () =>
          setState({
            ...state,
            myFavoriteCocktails: favoriteCocktail || [],
            isLoading: false
          }),
        2000
      );
    } catch (error) {
      setState({ ...state, isLoading: false, myFavoriteCocktails: [] });
    }
  };

  const setCocktailAsFavorite = async cocktail => {
    try {
      setState({ ...state, isLoading: true });

      const favoriteCocktails = state.myFavoriteCocktails;

      // check if already in favorite
      const foundCocktail = favoriteCocktails.find(
        elem => cocktail.name === elem.name
      );
      if (foundCocktail) {
        setState({ ...state, isLoading: false });
        return;
      }

      favoriteCocktails.push(cocktail);

      await setItem(FAVORITE_COCKTAILS, favoriteCocktails, "array");
      setTimeout(
        () =>
          setState({
            ...state,
            myFavoriteCocktails: favoriteCocktails || [],
            isLoading: false
          }),
        2000
      );
    } catch (error) {
      console.log("Amo: useFavoriteCocktailStore -> error", { error });
      setState({ ...state, isLoading: false });
    }
  };
  const removeFavoriteCocktailByName = async name => {
    try {
      setState({ ...state, isLoading: true });
      const favoriteCocktails = state.myFavoriteCocktails;

      const filteredCocktails = favoriteCocktails.filter(
        cocktail => cocktail.name !== name
      );

      await setItem(FAVORITE_COCKTAILS, filteredCocktails, "array");
      setTimeout(
        () =>
          setState({
            ...state,
            myFavoriteCocktails: filteredCocktails || [],
            isLoading: false
          }),
        2000
      );
    } catch (error) {
      console.log("Amo: useFavoriteCocktailStore -> error", { error });
      setState({ ...state, isLoading: false });
    }
  };

  return {
    myFavoriteCocktails,
    loadFavoriteCocktails,
    removeFavoriteCocktailByName,
    isLoading,
    setCocktailAsFavorite
  };
};
