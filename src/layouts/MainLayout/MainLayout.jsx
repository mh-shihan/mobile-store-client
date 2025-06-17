import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import UpdatedNavbar from "../../header/UpdatedNavbar";
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="scroll-smooth">
      <Toaster />
      <UpdatedNavbar></UpdatedNavbar>
      <div className="max-w-7xl mx-auto px-3 pt-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
