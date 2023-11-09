const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 mx-4 md:mx-4 ">
      <div>
        <img
          className="rounded-lg  "
          src="https://i.ibb.co/rfbcRZv/pexels-torsten-dettlaff-54284.jpg"
          alt=""
        />
      </div>
      <div className="space-y-4 ">
        <h3 className="text-blue-600 text-2xl font-bold text-center md:text-left">
          ABOUT US
        </h3>
        <h1 className="text-3xl sm:text-center md:text-5xl  font-bold text-center md:text-left">
          WELCOME TO <span className="text-blue-600">MOBILE STORE</span>
        </h1>
        <h4 className="md:text-xl font-medium text-justify">
          Welcome to Mobile Store, your one-stop destination for cutting-edge
          smartphones!
        </h4>
        <p className=" text-justify text-sm md:text-base">
          Welcome to Mobile Store, where cutting-edge technology meets your
          fingertips. Immerse yourself in a world of innovation with our curated
          selection of top-tier brands like Apple, Samsung, Google, Nokia, and
          more.
        </p>
        <p className=" text-justify text-sm md:text-base">
          {" "}
          At Mobile Store, we dont just sell phones; we deliver experiences. Our
          commitment to quality and customer satisfaction sets us apart.
        </p>
      </div>
    </div>
  );
};

export default About;
