import React, { createContext, useState } from "react";

export const FavoriteContext = createContext([{}, () => {}]);

const initialState = {
  myFavoriteCocktails: [],
  isLoading: false,
  hasErrored: false,
};

export const FavoriteProvider = props => {
  const [state, setState] = useState(initialState);

  return (
    <FavoriteContext.Provider value={[state, setState]}>
      {props.children}
    </FavoriteContext.Provider>
  );
};
