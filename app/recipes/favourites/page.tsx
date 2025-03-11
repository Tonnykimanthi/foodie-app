"use client";

import { useMealsContext } from "../../hooks/useMealsContext";
// Components
import Favourite from "./Favourite";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
};

const page = () => {
  const { state } = useMealsContext();

  return (
    <main className="flex flex-col items-center px-5">
      <h1 className="mt-5 text-2xl font-medium">Favourites</h1>
      {state.favourites.length === 0 ? (
        <p className="text-center mt-5">No meal in the favourites!</p>
      ) : (
        <div className="grid w-full grid-cols-3 gap-5 py-5 max-sm:grid-cols-2 max-[360px]:grid-cols-1">
          {state.favourites.map((idMeal) => (
            <Favourite key={idMeal} idMeal={idMeal} />
          ))}
        </div>
      )}
    </main>
  );
};

export default page;
