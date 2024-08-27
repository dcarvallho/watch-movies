import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import TestContextProvider from "../../../section/TestContextProvider";

const Wrapper = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#fce1cb' }}>
      <TestContextProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </TestContextProvider>
    </div>
  );
};

export default Wrapper;
