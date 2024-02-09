import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div>
        <h2 className="text-4xl font-bold">Oops!!! Page Not found </h2>
        <div className="flex gap-6">
          <h3 className="text-2xl text-center mt-4">
            Please go to
            <Link to={-1} className="text-blue-600 font-bold mr-4">
              Back
            </Link>
            or
          </h3>
          <h3 className="text-2xl text-center mt-4">
            Go
            <Link to="/" className="text-blue-600 font-bold">
              Home
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Error;
