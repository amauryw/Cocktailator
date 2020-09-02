import React, { createContext, useState } from "react";

export const ResultCocktailContext = createContext([{}, () => {}]);

const initialState = {
  myResultCocktails: [],
  isLoading: false
};

export const ResultCocktailProvider = props => {
  const [state, setState] = useState(initialState);

  return (
    <ResultCocktailContext.Provider value={[state, setState]}>
      {props.children}
    </ResultCocktailContext.Provider>
  );
};
