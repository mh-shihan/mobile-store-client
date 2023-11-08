import { useLoaderData } from "react-router-dom";

const Brands = () => {
  const loadedBrands = useLoaderData();
  console.log(loadedBrands);
  return (
    <div className="mt-10">
      <h1 className="text-3xl">
        Total number of brand : {loadedBrands.length}
      </h1>
    </div>
  );
};

export default Brands;
