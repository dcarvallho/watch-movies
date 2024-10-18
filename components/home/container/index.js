import React, { useState } from "react";
import Card from "../../commons/cards";
import style from "./style.module.scss";
import useTestContext from "../../hooks/use-test-context";
import { URL_IMAGE } from "../../../utils";
import Pagination from "../../commons/pagination";

const ITEMS_PER_PAGE = 9;

const HomeContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useTestContext();

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    setCurrentPage(page)
  }

  const paginatedMovies = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );
  console.log(paginatedMovies, 'filmes paginados');

  console.log(data, "oque vem nos dados");

  return (
    <div className={style.container}>
      <section className={style.containerList}>
        {paginatedMovies.map((datas, index) => (
          <Card
            key={index}
            movieTitle={datas.title}
            overview={datas.overview}
            releaseDate={datas.release_date}
            pontuation={datas.vote_average}
          >
            <img
              src={`${URL_IMAGE}/${datas.backdrop_path}`}
              className={style.teste}
            />
          </Card>
        ))}
        <br></br>
        <Pagination
          handleNextPage={() => handlePageChange(currentPage + 1)}
          handlePreviousPage={() => handlePageChange(currentPage - 1)}
          showInactive={currentPage === 1}
          totalPages={totalPages}
          currentPage={currentPage}
          showInactiveNext={currentPage === totalPages}
        />
      </section>
    </div>
  );
};

export default HomeContainer;
