// Icons
import { CiHeart } from "react-icons/ci";

const Category = () => {
  return (
    <div className="relative max-h-60 overflow-hidden rounded-lg shadow-md shadow-black/10 group">
      <img
        src="https://www.themealdb.com/images/media/meals/1529446352.jpg"
        alt="Chicken Congee"
        className="object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 flex w-full items-center justify-between bg-white/30 p-3">
        <p className="text-xl font-medium">Chicken Congee</p>
        <button>
          <CiHeart className="size-8" />
        </button>
      </div>
    </div>
  );
};

export default Category;
