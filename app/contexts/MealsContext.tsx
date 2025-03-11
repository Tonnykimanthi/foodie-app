"use client";

import { createContext, useEffect, useReducer } from "react";

type FavouritesState = {
  favourites: string[];
};
type Action =
  | { type: "ADD_FAVOURITE"; payload: string }
  | { type: "REMOVE_FAVOURITE"; payload: string };

type FavouritesContextType = {
  state: FavouritesState;
  dispatch: React.Dispatch<Action>;
  handleFavourite: (
    e: React.MouseEvent<HTMLButtonElement>,
    idMeal: string,
  ) => void;
  isFavourite: (idFavourite: string) => boolean;
};

export const mealsContext = createContext<FavouritesContextType | null>(null);

const favouritesReducer = (state: FavouritesState, action: Action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      if (state.favourites.includes(action.payload)) {
        return state;
      }
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter(
          (idMeal) => idMeal !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export const MealsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storedFavourites = JSON.parse(
    localStorage.getItem("favourites") || "[]",
  );
  const [state, dispatch] = useReducer(favouritesReducer, {
    favourites: storedFavourites,
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state.favourites]);

  // TOGGLE MEAL TO FAVOURITES
  const handleFavourite = (
    e: React.MouseEvent<HTMLButtonElement>,
    idMeal: string,
  ) => {
    e.stopPropagation();
    if (state.favourites.includes(idMeal)) {
      dispatch({ type: "REMOVE_FAVOURITE", payload: idMeal });
    } else {
      dispatch({ type: "ADD_FAVOURITE", payload: idMeal });
    }
  };

  const isFavourite = (idFavourite: string) =>
    state.favourites.includes(idFavourite);

  return (
    <mealsContext.Provider
      value={{ state, dispatch, handleFavourite, isFavourite }}
    >
      {children}
    </mealsContext.Provider>
  );
};
