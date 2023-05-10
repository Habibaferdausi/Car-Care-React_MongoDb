import React from "react";
import Navbar from "../Shared page/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared page/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
