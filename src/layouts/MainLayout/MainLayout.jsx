import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header></header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
