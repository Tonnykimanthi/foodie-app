import Link from "next/link";

const HeroSection = () => {
  return (
    <main className="flex h-screen items-center justify-between gap-5 max-md:relative">
      <div className="z-10 max-w-2xl max-md:absolute max-md:text-center max-md:text-white">
        <h1 className="text-6xl max-lg:text-5xl">
          Around the World in <span className="text-orange-600">Delicious</span>{" "}
          Dishes
        </h1>
        <p className="mt-5 text-xl">
          Get ready to expand your palate, ignite your taste buds, and discover
          the incredible world of international cuisine, one delicious dish at a
          time.
        </p>
        <Link href="/recipes" className="mt-5 inline-block">
          <button className="rounded-full bg-orange-500 px-10 py-2 text-white transition hover:bg-orange-600 active:scale-95">
            Explore
          </button>
        </Link>
      </div>

      <div className="size-96 flex-shrink-0 overflow-hidden rounded-full max-lg:size-80 max-md:absolute max-md:left-1/2 max-md:top-5 max-md:mx-auto max-md:h-[45em] max-md:w-[45em] max-md:-translate-x-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://raw.githubusercontent.com/Tonnykimanthi/recipe-app/refs/heads/master/public/images/food.jfif"
          alt="Food"
        />
      </div>
    </main>
  );
};

export default HeroSection;
