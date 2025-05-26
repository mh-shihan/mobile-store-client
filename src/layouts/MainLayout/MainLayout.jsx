import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import Navbar from "../../header/Navbar";
const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
