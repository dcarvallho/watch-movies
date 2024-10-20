import React, { useState, useContext } from "react";
import Card from "../../commons/cards";
import style from "./style.module.scss";
import { URL_IMAGE } from "../../../utils";
import Pagination from "../../commons/pagination";
import TestContext from "../../../context/TestContext";

const ITEMS_PER_PAGE = 9;

const HomeContainer = () => {
  const { data, totalPages, page, goToNextPage, goToPrevPage } = useContext(TestContext);

  return (
    <div className={style.container}>
      <section className={style.containerList}>
        {data.map((datas, index) => (
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
          handleNextPage={goToNextPage}
          handlePreviousPage={goToPrevPage}
          showInactive={page === 1}
          totalPages={totalPages}
          currentPage={page}
          showInactiveNext={page === totalPages}
        />
      </section>
    </div>
  );
};

export default HomeContainer;
