import React, { useState } from "react";
import TestContext from "../context/TestContext";

const TestContextProvider = ({ children }) => {
  const [test, setTest] = useState('Testando contexto padrão');
  return (
    <TestContext.Provider value={{test}}>
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
