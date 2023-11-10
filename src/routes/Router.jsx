import { createBrowserRouter } from "react-router-dom";
import Mobiles from "../components/Mobiles";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MobileDetails from "../components/MobileDetails";
import MyCart from "../components/MyCart";
import UpdateForm from "../components/UpdateForm";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Error from "../pages/Error";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://mobile-store-server-rust.vercel.app/brands"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:brandName",
        element: <Mobiles></Mobiles>,
        loader: ({ params }) =>
          fetch(
            `https://mobile-store-server-rust.vercel.app/single-brand-mobile?brandName=${params.brandName}`
          ),
      },
      {
        path: "/mobileDetails/:id",
        element: (
          <PrivateRoute>
            <MobileDetails></MobileDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mobile-store-server-rust.vercel.app/mobiles/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateForm/:id",
        element: (
          <PrivateRoute>
            <UpdateForm></UpdateForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mobile-store-server-rust.vercel.app/mobiles/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
