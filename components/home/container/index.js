import React, { useEffect } from "react";
import Card from "../../commons/cards";
import style from "./style.module.scss";
import useTestContext from "../../hooks/use-test-context";
import { URL_IMAGE } from "../../../utils";

const HomeContainer = () => {
  const { data } = useTestContext();

  return (
    <div className={style.container}>
      <div className={style.containerList}>
        {data.map((datas) => (
          <Card
            key={datas.id}
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
      </div>
    </div>
  );
};

export default HomeContainer;
