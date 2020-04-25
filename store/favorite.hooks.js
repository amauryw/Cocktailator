import { useContext } from "react";
import { setItem } from "../libs/asyncStorage";
import { FavoriteContext } from "./favorite.context";
import { fetchCocktailsByName } from "../api/cocktails.api";
import { adaptApiCocktailToCocktails } from "./favorite.adapter";

export const useFavoriteStore = () => {
  const [state, setState] = useContext(FavoriteContext);
  const myFavoriteCocktails = state.myFavoriteCocktails;

  const loadCocktails = async () => {
    const apiFetchedCockails = await fetchCocktailsByName("a");
    const cocktails = adaptApiCocktailToCocktails(apiFetchedCockails);
    setState({ myFavoriteCocktails: cocktails });
  };

  return { myFavoriteCocktails, loadCocktails };
};
