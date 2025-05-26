import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MobileDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const mobileDetails = useLoaderData();
  const { _id, name, brandName, type, price, details, rating, photo } =
    mobileDetails;
  //   console.log(mobileDetails);
  const handleAddToCart = () => {
    console.log(_id);
    const myCartMobile = {
      name,
      brandName,
      type,
      price,
      details,
      rating,
      photo,
      ownerEmail: user?.email,
      mobileId: _id,
    };
    fetch("https://mobile-store-server-rust.vercel.app/addToCarts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myCartMobile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Phone added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <div className="flex justify-center mt-32 mx-4 mb-10 ">
        <div className="relative flex flex-col md:flex-row w-full max-w-[48rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
            <img
              src={photo}
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className=" p-4 md:p-6">
            <div className="flex flex-row-reverse justify-between">
              <h6 className="block mb-2 md:mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-400 uppercase">
                {type}
              </h6>
              <div className="badge badge-secondary bg-pink-500 text-white">
                {brandName}
              </div>
            </div>
            <div className="flex justify-between mt-2 ">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {name}
              </h4>
            </div>
            <p className="block md:mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              {details}
            </p>
            <div className="flex justify-between mt-2">
              <p className="font-extrabold">{price}$</p>
              <p className="text-bold">{rating}⭐</p>
            </div>
            <a className="inline-block " href="#">
              <button
                onClick={() => handleAddToCart(_id)}
                className="flex items-center gap-2 px-6 py-3 font-sans text-xl  font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Add to Card
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDetails;
