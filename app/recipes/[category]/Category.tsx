// Icons
import { CiHeart } from "react-icons/ci";

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  handleRedirectToSingleMeal: () => void;
};

const Category = ({
  strMeal,
  strMealThumb,
  handleRedirectToSingleMeal,
}: Meal) => {
  return (
    <div
      className="group relative max-h-60 cursor-pointer overflow-hidden rounded-lg shadow-md shadow-black/10"
      onClick={handleRedirectToSingleMeal}
    >
      <img
        src={strMealThumb}
        alt={strMeal}
        className="object- transition duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 flex w-full items-center justify-between bg-black/20 p-2">
        <p className="text-lg font-medium text-white">{strMeal}</p>
        <button>
          <CiHeart className="size-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Category;
