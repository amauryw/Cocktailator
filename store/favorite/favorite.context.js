import React, { createContext, useState } from "react";

export const FavoriteCocktailContext = createContext([{}, () => {}]);

const initialState = {
  myFavoriteCocktails: [],
  isLoading: false
};

export const FavoriteCocktailProvider = props => {
  const [state, setState] = useState(initialState);

  return (
    <FavoriteCocktailContext.Provider value={[state, setState]}>
      {props.children}
    </FavoriteCocktailContext.Provider>
  );
};
