import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header></header>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
