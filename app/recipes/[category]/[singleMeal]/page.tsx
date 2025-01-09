"use client";

import useFetch from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const page = () => {
  const params = useParams();
  const { data, loading, error } = useFetch<{ meals: Meal[] }>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
`,
  );
  console.log(params);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-5 text-2xl font-medium italic">
        {data?.meals[0].strMeal}
      </h1>
      <div className="mt-5 h-96 w-11/12 max-w-4xl overflow-hidden rounded-md">
        <img
          src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h2 className="font-bold">Ingredients</h2>
        <p>penne rigate</p>
        <p>olive oil</p>
        <p>garlic</p>
      </div>

      <div>
        <h2 className="font-bold">Insructions</h2>
      </div>
    </div>
  );
};

export default page;
