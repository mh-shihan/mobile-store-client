import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCard from "./MyCard";
import Navbar from "../header/Navbar";

const MyCart = () => {
  const loadedCartData = useLoaderData();
  const [cartData, setCartData] = useState(loadedCartData);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <h2 className="mt-10 text-3xl font-bold mb-4 ml-4">
        Total Cart Products : {cartData.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cartData.map((cart) => (
          <MyCard
            key={cart._id}
            cart={cart}
            cartData={cartData}
            setCartData={setCartData}
          ></MyCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
