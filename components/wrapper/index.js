import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

const Wrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
