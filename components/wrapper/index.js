import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import TestContextProvider from "../../section/TestContextProvider";

const Wrapper = ({ children }) => {
  return (
    <>
      <TestContextProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </TestContextProvider>
    </>
  );
};

export default Wrapper;
