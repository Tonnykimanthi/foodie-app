// Icons
import { CiHeart } from "react-icons/ci";

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

const Category = ({ strMeal, strMealThumb }: Meal) => {
  return (
    <div className="group relative max-h-60 overflow-hidden rounded-lg shadow-md shadow-black/10">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 flex w-full items-center justify-between bg-black/20 p-2">
        <p className="text-lg font-medium text-white">{strMeal}</p>
        <button>
          <CiHeart className="size-8" />
        </button>
      </div>
    </div>
  );
};

export default Category;
