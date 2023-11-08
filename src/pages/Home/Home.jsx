import Brands from "../../components/Brands";
import Banner from "../../header/Banner";
import Navbar from "../../header/Navbar";

const Home = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>

      <section>
        <Banner></Banner>
      </section>

      <section className="max-w-7xl mx-auto">
        <Brands></Brands>
      </section>
    </div>
  );
};

export default Home;
