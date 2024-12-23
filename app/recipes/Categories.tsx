"use client";

import useFetch from "../hooks/useFetch";

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
};

const Categories = () => {
const {data, loading, error} = useFetch<{categories: Category[]}>("https://www.themealdb.com/api/json/v1/1/categories.php") 

console.log(data)

  return (
    <div className="mt-5 grid grid-cols-3 gap-5">
      {data?.categories?.map((category) => (
        <div
          key={category.idCategory}
          className="border border-orange-500 rounded-lg"
        >
          <img src={category.strCategoryThumb} alt="The meal" />
          <div className="p-2 bg-white/40 text-center">
            <span>{category.strCategory}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
