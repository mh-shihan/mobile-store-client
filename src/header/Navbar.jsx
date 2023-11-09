import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li className="font-semibold text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-lg  ">
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li className="font-semibold text-lg ">
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
      <li className="font-semibold text-lg ">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  // fixed top-0 w-full z-10

  return (
    <div className="navbar bg-base-100 bg-opacity-50 px-0 md:px-4 max-w-7xl mx-auto shadow-lg py-6">
      <div className="navbar-start  ">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost text-blue-600 font-bold mr-0 md:mr-10 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" normal-case md:text-5xl ">
          <p>
            <span className="text-blue-600 font-bold">Mobile</span>
            <span className="font-light">Store</span>
          </p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
      </div>
      <div className="navbar-end flex flex-col md:flex-row ml-8">
        <img className="h-8 w-8 mr-2 rounded-full" alt="" />
        <div className="">
          {user ? (
            <div className="flex flex-col-reverse xl:flex-row items-center justify-center mt-2 md:mt-0 ">
              <p className=" text-xs md:text-base break-all text-center">
                {user?.email}
              </p>
              <button
                onClick={handleLogOut}
                className=" md:btn-sm text-sm md:text-lg  px-1   rounded-md block  mx-auto font-medium bg-blue-600 text-white ml-10 md:ml-2 "
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/register">
              <button className="btn btn-sm bg-blue-600 text-white ml-2">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
