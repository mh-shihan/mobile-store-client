import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import Aos from "aos";

const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <header></header>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
