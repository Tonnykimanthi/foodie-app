"use client";

import { useParams } from "next/navigation";
// Hooks
import useFetch from "@/app/hooks/useFetch";
// Components
import Error from "@/app/components/ui/Error";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: string;
};

const page = () => {
  const params = useParams();
  const { data, loading, error } = useFetch<{ meals: Meal[] }>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
`,
  );
  const meal = data?.meals[0];
  console.log("meal:", meal);

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
  console.log("Ingredients:", ingredients);

  return (
    <main className="px-5">
      {loading && <span>Loading...</span>}
      {!loading && error && <Error />}
      {!loading && meal && (
        <div className="flex flex-col items-center">
          <h1 className="mt-5 text-2xl font-medium">{meal.strMeal}</h1>
          <div className="max-w-4x mt-5 aspect-video w-11/12 overflow-hidden rounded-md">
            <img
              src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
              alt=""
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

export default page;
