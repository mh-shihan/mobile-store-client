import Brands from "../../components/Brands";
import Footer from "../../components/Footer";
import Banner from "../../header/Banner";
import Navbar from "../../header/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>

        <section>
          <Banner></Banner>
        </section>
      </header>

      <main className="max-w-7xl mx-auto">
        <section>
          <Brands></Brands>
        </section>
        <section className="mt-20 h-[500px] w-full bg-base-300 rounded-lg flex justify-center items-center">
          <h1 className="text-3xl font-bold">Extra Section 1</h1>
        </section>
        <section className="mt-20 h-[500px] w-full bg-base-300 rounded-lg flex justify-center items-center">
          <h1 className="text-3xl font-bold">Extra Section 1</h1>
        </section>
      </main>
      <footer className="mt-4">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
