import Category from "./Category";

const page = () => {
  return (
    <main className="flex flex-col items-center px-5">
      <h1 className="mt-5 text-2xl font-medium">Chickens</h1>
      <div className="grid w-full grid-cols-3 gap-5 py-5 max-sm:grid-cols-2 max-[360px]:grid-cols-1">
        <Category />
        <Category />
        <Category />
      </div>
    </main>
  );
};

export default page;
