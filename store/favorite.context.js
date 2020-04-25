import React, { createContext, useState } from "react";

export const FavoriteContext = createContext([{}, () => {}]);

const mockedCocktail = {
  id: "ewffe",
  name: "Nom du coktail",
  imagePath:
    "https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg"
};
const mockedCocktails = [
  mockedCocktail,
  mockedCocktail,
  mockedCocktail,
  mockedCocktail,
  mockedCocktail,
  mockedCocktail
];
const initialState = {
  myFavoriteCocktails: mockedCocktails
};

export const FavoriteProvider = props => {
  const [state, setState] = useState(initialState);
  return (
    <FavoriteContext.Provider value={[state, setState]}>
      {props.children}
    </FavoriteContext.Provider>
  );
};
