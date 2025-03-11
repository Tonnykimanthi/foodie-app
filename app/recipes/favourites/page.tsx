"use client";

import { useState } from "react";
// Hooks
import useFetch from "../../hooks/useFetch";
import { useMealsContext } from "../../hooks/useMealsContext";
// Components
import Favourite from "./Favourite";
import Loader from "../../components/ui/Loader";
import Error from "../../components/ui/Error";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
};

const page = () => {
  const { state } = useMealsContext();

  const meals = [];
  let favLoading = false;
  let favError = null;

  for (let id of state.favourites) {
    const { data, loading, error } = useFetch<{ meals: Meal[] }>(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );

    if (data) {
      meals.push(data.meals[0]);
    }
    favLoading = loading;
    favError = error;
  }

  console.log(meals);

  return (
    <main className="flex flex-col items-center px-5">
      <h1 className="mt-5 text-2xl font-medium">Favourites</h1>
      {!favLoading && favError && <Error />}
      <div className="grid w-full grid-cols-3 gap-5 py-5 max-sm:grid-cols-2 max-[360px]:grid-cols-1">
        {favLoading && (
          <>
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </>
        )}
      </div>
      {meals.length === 0 ? (
        <p className="text-center">
          You have not added any meal to favourites.
        </p>
      ) : (
        <div className="grid w-full grid-cols-3 gap-5 py-5 max-sm:grid-cols-2 max-[360px]:grid-cols-1">
          {meals.map((meal) => (
            <Favourite key={meal.idMeal} {...meal} />
          ))}
        </div>
      )}
    </main>
  );
};

export default page;
