import Categories from "./Categories";

const page = () => {
  return (
    <main className="flex flex-col items-center px-5">
      <h1 className="mt-5 text-2xl font-medium">All Categories</h1>
      <Categories />
    </main>
  );
};

export default page;
