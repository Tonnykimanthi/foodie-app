import { useContext } from "react";
import { mealsContext } from "../contexts/MealsContext";

export const useMealsContext = () => {
  const context = useContext(mealsContext);

  if (!context) {
    throw new Error(
      "Ensure that the context you are trying to use is within the app",
    );
  }

  return context;
};
