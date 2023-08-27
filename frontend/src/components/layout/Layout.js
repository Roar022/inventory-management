import React from "react";
// import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  console.log("in layout " + children);
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }} className="--pad">
        Layout children
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
