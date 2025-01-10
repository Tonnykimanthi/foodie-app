"use client";

import { useParams, useRouter } from "next/navigation";
// Hooks
import useFetch from "@/app/hooks/useFetch";
// Components
import Category from "./Category";
import Loader from "@/app/components/ui/Loader";
import Error from "@/app/components/ui/Error";

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

const Page = () => {
  const params = useParams();
  const router = useRouter();

  const { data, loading, error } = useFetch<{ meals: Meal[] }>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`,
  );

  const handleRedirectToSingleMeal = (mealID: string) => {
    router.push(`${params.category}/${mealID}`);
  };

  return (
    <main className="flex flex-col items-center px-5">
      <h1 className="mt-5 text-2xl font-medium">{params.category}</h1>
      {!loading && error && <Error />}
      <div className="grid w-full grid-cols-3 gap-5 py-5 max-sm:grid-cols-2 max-[360px]:grid-cols-1">
        {loading && (
          <>
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </>
        )}
        {data?.meals?.map((meal) => (
          <Category
            key={meal.idMeal}
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
            idMeal={meal.idMeal}
            handleRedirectToSingleMeal={() =>
              handleRedirectToSingleMeal(meal.idMeal)
            }
          />
        ))}
      </div>
    </main>
  );
};

export default Page;
