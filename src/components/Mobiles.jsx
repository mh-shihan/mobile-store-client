import { Carousel, IconButton } from "@material-tailwind/react";

import { Link, useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import MobileCard from "./MobileCard";

export const Mobiles = () => {
  const loadedMobiles = useLoaderData();
  const [mobiles, setMobiles] = useState(loadedMobiles);
  const { brandName } = useParams();
  return (
    <div>
      <div className="max-w-7xl mx-auto h-[70vh] mt-12">
        <Carousel
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <img
            src="https://i.ibb.co/9NwPND8/slider-1.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://i.ibb.co/0X1C5PC/slider-2.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://i.ibb.co/48mfHVf/slider-3.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <h2 className="mt-10 text-4xl text-center font-extrabold">
        <span className="text-blue-600 font-extrabold text-5xl">
          {brandName}
        </span>{" "}
        Collection
      </h2>
      <div className="mt-10">
        {loadedMobiles.length === 0 && (
          <div>
            <h2 className="text-3xl space-y-5 font-bold text-center">
              Sorry!! No Mobile Found
            </h2>
            <div className="text-center my-5">
              <Link to="/addProduct">
                <button className="btn hover:text-gray-900 bg-blue-600 border-blue-600 text-base-100">
                  Add Mobile
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        {mobiles.map((mobile) => (
          <MobileCard
            key={mobile._id}
            mobile={mobile}
            mobiles={mobiles}
            setMobiles={setMobiles}
          ></MobileCard>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
