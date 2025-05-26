import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import UpdatedNavbar from "../../header/UpdatedNavbar";
const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="scroll-smooth">
      <UpdatedNavbar></UpdatedNavbar>
      <div className="max-w-7xl mx-auto px-3 pt-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
