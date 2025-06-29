import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { HiSun, HiMoon } from "react-icons/hi2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { darkMode, lightMode, theme } = useContext(ThemeContext);

  const handleLogout = () => {
    console.log("Logging out...");
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinks = (
    <>
      <div className="cursor-pointer">
        {theme == "light" && (
          <div onClick={darkMode} className="bg-stone-100 p-3">
            <HiMoon></HiMoon>
          </div>
        )}
        {theme == "dark" && (
          <div onClick={lightMode} className="bg-stone-100 p-3">
            <HiSun></HiSun>
          </div>
        )}
      </div>
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

  const profile = (
    <div className="flex items-center gap-2">
      {/* <div className="bg-stone-300 p-2 rounded-lg shadow">
        {user?.credit} 🪙
      </div> */}
      <div
        className="tooltip tooltip-left tooltip-accent"
        data-tip={`${user?.displayName}`}
      >
        <div>
          <div>
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                alt=""
                className=" w-10 h-10 border bg-opacity-75  border-blue-600 p-[2px] rounded-full"
              />
            ) : (
              <p className="break-all text-blue-600 font-light border rounded-lg">
                {user?.displayName}
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="btn btn-accent btn-sm text-white bg-blue-600 border-blue-600"
      >
        Log Out
      </button>
    </div>
  );

  return (
    <div className="bg-base-100 mb-16 bg-opacity-50 px-0 md:px-4 mx-auto shadow-lg py-2 fixed top-0 w-full z-10">
      <div className="navbar max-w-7xl mx-auto">
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
          <div className="">
            {user ? (
              <div>{profile}</div>
            ) : (
              <Link to="/register">
                <button className="btn btn-sm bg-blue-600 border-blue-600 text-white ml-2">
                  Register
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
