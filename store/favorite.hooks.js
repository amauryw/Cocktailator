import { useContext } from "react";
import { setItem } from "../libs/asyncStorage";
import { FavoriteContext } from "./favorite.context";

export const useFavoriteStore = () => {
  const [state, setState] = useContext(FavoriteContext);
  const myFavoriteCocktails = state.myFavoriteCocktails;
  return { myFavoriteCocktails };
};
