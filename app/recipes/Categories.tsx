"use client";

import Loader from "../components/ui/Loader";
import useFetch from "../hooks/useFetch";

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
};

const Categories = () => {
  const { data, loading, error } = useFetch<{ categories: Category[] }>(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

  console.log(data);

  return (
    <>
      {loading && (
        <div className="grid w-full grid-cols-3 gap-5 py-5 max-sm:grid-cols-2 max-[360px]:grid-cols-1">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
      )}
      {!loading && error && (
        <p className="mt-10 text-center text-xl text-red-500">
          Oops! Something went wrong.
        </p>
      )}
      <div className="grid w-full grid-cols-3 gap-5 py-5 max-sm:grid-cols-2 max-[360px]:grid-cols-1">
        {!loading &&
          !error &&
          data?.categories?.map((category: Category) => (
            <div
              key={category.idCategory}
              className="group overflow-hidden rounded-lg shadow-md shadow-black/10"
            >
              <img
                src={category.strCategoryThumb}
                alt="The meal"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="p-2 text-center">
                <span>{category.strCategory}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
