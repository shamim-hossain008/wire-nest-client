import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import Navbar from "../Pages/Home/Home/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nave bar  */}
      <div className="sm:mx-4 md:mx-10">
        <Navbar />
      </div>

      <div className="flex-1 sm:mx-4 md:mx-20 p-2 bg-red-300">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
