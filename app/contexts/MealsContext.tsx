"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

type MealsContextType = {
  activeMeal: string;
  setActiveMeal: Dispatch<SetStateAction<string>>;
};

export const mealsContext = createContext<MealsContextType | null>(null);

export const MealsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeMeal, setActiveMeal] = useState("");

  return (
    <mealsContext.Provider value={{ activeMeal, setActiveMeal }}>
      {children}
    </mealsContext.Provider>
  );
};
