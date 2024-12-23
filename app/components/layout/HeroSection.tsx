const HeroSection = () => {
  return (
    <main className="flex items-center justify-between gap-5 max-md:relative h-screen">
      <div className="max-w-2xl max-md:absolute max-md:text-white max-md:text-center">
        <h1 className="text-6xl max-lg:text-5xl">
          Around the World in <span className="text-orange-600">Delicious</span>{" "}
          Dishes
        </h1>
        <p className="mt-5 text-xl">
          Get ready to expand your palate, ignite your taste buds, and discover
          the incredible world of international cuisine, one delicious dish at a
          time.
        </p>
      </div>

      <div className="size-96 max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 -z-10 rounded-full max-md:mx-auto max-md:w-[50em] max-md:h-[50em] overflow-hidden flex-shrink-0 max-lg:size-80">
        <img
          className="w-full h-full object-cover"
          src="https://raw.githubusercontent.com/Tonnykimanthi/recipe-app/refs/heads/master/public/images/food.jfif"
          alt="Food"
        />
      </div>
    </main>
  );
};

export default HeroSection;
