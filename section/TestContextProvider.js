import React, { useState, useEffect } from "react";
import TestContext from "../context/TestContext";

const TestContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=bf1a66b28fd724d2769e4f66cc665bc0')
    .then(response => response.json())
    .then(data => setData(data.results))
    .catch(err => console.log(err))
  },[])

  return (
    <TestContext.Provider value={{ data }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
