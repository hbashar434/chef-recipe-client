import React from "react";
import Navbar from "../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="mx-8 md:mx-16 lg:mx-24">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-50px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
