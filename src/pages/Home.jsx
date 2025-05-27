import About from "../components/About";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../header/Banner";

const Home = () => {
  return (
    <div>
      <section data-aos="fade-up">
        <Banner></Banner>
      </section>
      <main className="max-w-7xl mx-4 md:mx-auto ">
        <section>
          <Brands></Brands>
        </section>
        <section className=" mt-20 border-blue-500 shadow-lg">
          <About></About>
        </section>
        <section className="mt-20">
          <Contact></Contact>
        </section>
      </main>
    </div>
  );
};

export default Home;
