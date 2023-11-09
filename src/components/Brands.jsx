import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard/BrandCard";

const Brands = () => {
  const loadedBrands = useLoaderData();
  console.log(loadedBrands);
  return (
    <div className="mt-20">
      <h1 className="text-5xl text-center font-extrabold mb-10">
        Out <span>Brands</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {loadedBrands.map((brand) => (
          <BrandCard key={brand?._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
