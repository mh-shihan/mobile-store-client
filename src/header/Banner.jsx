import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen max-w-7xl mx-auto "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/KmLWN5P/mobile-phone-1875813-1920.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          {/* todo :: The is some design to made */}
          <h1 className="mb-5 text-5xl font-bold text-base-200">HELLO THERE</h1>
          <p className="mb-5 text-base-100">
            Welcome to Mobile Store, your one-stop destination for cutting-edge
            smartphones! Explore the latest innovations from top brands like
            Apple, Google, Nokia, Samsung, Sony, and Xiaomi. Elevate your mobile
            experience with our curated selection, blending style, performance,
            and reliability. Discover the future of communication at Mobile
            Store!
          </p>
          <Link to={"/login"}>
            {" "}
            <button className="btn bg-blue-600 border-blue-600 text-base-200 hover:text-gray-900">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
