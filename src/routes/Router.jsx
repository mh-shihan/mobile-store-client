import { createBrowserRouter } from "react-router-dom";
import Mobiles from "../components/Mobiles";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:5000/brands"),
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "/brand/:brandName",
    element: <Mobiles></Mobiles>,
    loader: ({ params }) =>
      fetch(
        `http://localhost:5000/single-brand-mobile?brandName=${params.brandName}`
      ),
  },
]);

export default router;
