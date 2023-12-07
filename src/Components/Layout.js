import React, { Children } from "react";
import Navbar from "./Navbar";
import FooterLayout from "./Footer/Footer";
const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <main>{Children}</main>
      <FooterLayout />
    </>
  );
};

export default Layout;
