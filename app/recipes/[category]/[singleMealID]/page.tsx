"use client";

import { useParams } from "next/navigation";
// Hooks
import useFetch from "@/app/hooks/useFetch";
// Components
import Error from "@/app/components/ui/Error";
import LoaderSpinner from "@/app/components/ui/LoaderSpinner";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: string;
};

const Page = () => {
  const params = useParams();
  const { data, loading, error } = useFetch<{ meals: Meal[] }>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.singleMealID}
`,
  );
  const meal = data?.meals[0];

  const ingredients: string[] = [];

  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient) {
        ingredients.push(ingredient + " - " + measure);
      }
    }
  }

  return (
    <main className="px-5">
      {loading && <LoaderSpinner />}

      {!loading && error && <Error />}
      {meal && (
        <div className="mt-5 flex flex-col items-center">
          <h1 className="text-2xl font-medium">{meal.strMeal}</h1>
          <div className="max-w-4x mt-5 aspect-video w-11/12 overflow-hidden rounded-md">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="my-5">
            <h2 className="text-center text-2xl font-medium italic">
              Ingredients
            </h2>
            <ul className="list-disc">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-medium italic">Instructions</h2>
            <p>{data?.meals[0].strInstructions}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
