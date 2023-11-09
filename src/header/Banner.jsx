const Banner = () => {
  return (
    <div
      className="hero min-h-screen max-w-7xl mx-auto "
      style={{
        backgroundImage:
          "url(https://pixabay.com/get/g8a9e968dbfc355d664d09e7cb67f2b62e7ac251ca405d47c66b7056eede6a254576e60b1a875b5588fded4c9f421bb0e7df11bb9d652c46efbfc676d1cf0d799_1920.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          {/* todo :: The is some design to made */}
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
