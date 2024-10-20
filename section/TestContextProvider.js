import React, { useState, useEffect } from "react";
import TestContext from "../context/TestContext";

const TestContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const fetchMovies = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=bf1a66b28fd724d2769e4f66cc665bc0&page=${pageNumber}`
      );
      const data = await response.json();
      setData(data.results);
      setTotalPages(data.total_pages);
      setPage(data.page);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const goToNextPage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (page < totalPages) setPage(page + 1);
  };

  const goToPrevPage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (page > 1) setPage(page - 1);
  };

  return (
    <TestContext.Provider
      value={{ data, totalPages, page, goToNextPage, goToPrevPage }}
    >
      {children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
