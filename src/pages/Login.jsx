import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import Navbar from "../header/Navbar";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createSignInUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  console.log("Location inside Login page", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setSuccessMessage("");
    setErrorMessage("");

    createSignInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();

        // React Toast
        Swal.fire({
          title: "Success!",
          text: "Phone added successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });

        // Navigate After Login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="xl:hero bg-base-200">
        <div className="hero-content xl:w-1/2 flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-blue-600">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className="cursor-pointer absolute bottom-[37%] right-[3%]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-blue-600 text-white text-2xl">
                  Login
                </button>
              </div>
              <p>
                New to this website? Please{" "}
                <Link className="text-blue-600" to="/register">
                  Register
                </Link>
              </p>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {successMessage && (
                <p className="text-green-600">{successMessage}</p>
              )}
            </form>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-ghost text-blue-600"
            >
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
