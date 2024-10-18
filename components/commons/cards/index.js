import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style.module.scss";
import PropTypes from "prop-types";
import ButtonComponent from "../button";
import star from "../../../public/star.svg";
import { formatedUrlParams } from "../../../utils";

const Card = ({
  children,
  movieTitle,
  releaseDate,
  overview,
  className,
  pontuation,
}) => {
  const handleCheckIngress = () => {
    const url = `https://www.ingresso.com/filme/${encodeURIComponent(
      movieTitle
    )}`;

    window.open(url, "_blank");
  };

  const goToTrailer = () => {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      movieTitle
    )}+trailer`;

    window.open(url, "_blank");
  };

  return (
    <div className={style.cardContainer}>
      <main className={style.cardContainerImage}>{children}</main>
      <section className={style.cardContainerInfo}>
        <h1>{movieTitle}</h1>
        <article className={style.headerCard}>
          <h3>{releaseDate}</h3>
          <span>
            {star.svg}
            {pontuation}
          </span>
        </article>
        <p>{overview}</p>
        <div className={style.cardContainerButtons}>
          <ButtonComponent actionButton={goToTrailer}>
            Ir para o trailer
          </ButtonComponent>
          <ButtonComponent actionButton={handleCheckIngress}>
            Verificar disponibilidade
          </ButtonComponent>
        </div>
      </section>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  movieTitle: PropTypes.string,
};

export default Card;
