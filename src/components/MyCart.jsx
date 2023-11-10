import { useContext, useEffect, useState } from "react";
import MyCard from "./MyCard";
import Navbar from "../header/Navbar";
import { AuthContext } from "../providers/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myCarts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartData(data);
      });
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>

      <h2 className="mt-24 text-3xl font-bold mb-4 ml-4 ">
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
