import { useContext } from "react";
import { ResultCocktailContext } from "./resultCocktail.context";
import { fetchCocktails } from "../api/cocktails.api";
import { adaptApiCocktailToCocktails } from "./resultCocktail.adapter";

export const useResultCocktailStore = () => {
  const [state, setState] = useContext(ResultCocktailContext);
  const myResultCocktails = state.myResultCocktails;

  const isLoading = state.isLoading;

  const loadCocktails = async (search, type) => {
    try {
      setState({ ...state, isLoading: true });
      const apiFetchedCockails = await fetchCocktails(search, type);
      const cocktails = adaptApiCocktailToCocktails(apiFetchedCockails);
      setState({ ...state, myResultCocktails: cocktails, isLoading: false });
    } catch (error) {
      setState({ ...state, isLoading: false, myResultCocktails: [] });
    }
  };

  return { myResultCocktails, loadCocktails, isLoading };
};
