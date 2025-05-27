import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createSignInUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  // console.log("Location inside Login page", location);

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
    <div className="min-h-screen pt-20 bg-base-200">
      <div className="xl:hero ">
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
                  className="input input-bordered w-full"
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
                    className="cursor-pointer absolute bottom-[37%] right-[3%] z-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
              </div>
              <div className="form-control mt-4 w-full">
                <button className="btn btn-outline w-full bg-blue-600 text-white text-2xl border-transparent">
                  Login
                </button>
              </div>
              <p className="mt-2">
                New to this website? Please{" "}
                <Link className="text-blue-600 font-medium" to="/register">
                  Register
                </Link>
              </p>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {successMessage && (
                <p className="text-green-600">{successMessage}</p>
              )}
            </form>
            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className={`btn bg-transparent text-blue-600  border-[#e5e5e5] border-transparent`}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
