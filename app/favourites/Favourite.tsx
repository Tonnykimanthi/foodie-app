// Hooks
import { useMealsContext } from "../hooks/useMealsContext";
// Icons
import { HiOutlineHeart } from "react-icons/hi2";
import { HiHeart } from "react-icons/hi2";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const Favourite = ({ idMeal, strMeal, strMealThumb }: Meal) => {
  const { handleFavourite, isFavourite } = useMealsContext();

  return (
    <main className="group relative max-h-60 cursor-pointer overflow-hidden rounded-lg shadow-md shadow-black/10">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="object- transition duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 flex w-full items-center justify-between gap-x-2 bg-black/20 p-2">
        <p className="truncate text-lg font-medium text-white">{strMeal}</p>
        <button onClick={(e) => handleFavourite(e, idMeal)}>
          {isFavourite(idMeal) ? (
            <HiHeart className="size-8 text-pink-600 transition hover:scale-110" />
          ) : (
            <HiOutlineHeart className="size-8 text-white transition hover:scale-110" />
          )}
        </button>
      </div>
    </main>
  );
};

export default Favourite;
