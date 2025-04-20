import { useRouter } from "next/navigation";
// Hooks
import useFetch from "@/app/hooks/useFetch";
import { useMealsContext } from "../../hooks/useMealsContext";
// Components
import Loader from "@/app/components/ui/Loader";
import Error from "@/app/components/ui/Error";
// Icons
import { HiOutlineHeart } from "react-icons/hi2";
import { HiHeart } from "react-icons/hi2";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
};

const Favourite = ({ idMeal }: { idMeal: string }) => {
  const router = useRouter();

  const { data, loading, error } = useFetch<{ meals: Meal[] }>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );

  const { handleFavourite, isFavourite } = useMealsContext();

  const meal = data?.meals[0];
  const handleRedirectToSingleMeal = (mealID: string) => {
    if (meal) {
      router.replace(`${meal.strCategory}/${mealID}`);
    }
  };

  if (loading) {
    return (
      <div className="space-y-5">
        <Loader />
        <Loader />
      </div>
    );
  }
  if (error) {
    return <Error />;
  }
  if (!meal) return null;

  return (
    <>
      {error && <Error />}
      <div
        className="group relative max-h-60 cursor-pointer overflow-hidden rounded-lg shadow-md shadow-black/10"
        onClick={() => handleRedirectToSingleMeal(idMeal)}
      >
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="transition duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 flex w-full items-center justify-between gap-x-2 bg-black/20 p-2">
          <p className="truncate text-lg font-medium text-white">
            {meal.strMeal}
          </p>
          <button onClick={(e) => handleFavourite(e, idMeal)}>
            {isFavourite(idMeal) ? (
              <HiHeart className="size-8 text-pink-600 transition hover:scale-110" />
            ) : (
              <HiOutlineHeart className="size-8 text-white transition hover:scale-110" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Favourite;
