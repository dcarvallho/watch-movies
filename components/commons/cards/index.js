import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import PropTypes from "prop-types";
import ButtonComponent from "../button";
import star from '../../../public/star.svg'
import { formatedUrlParams } from "../../../utils";

const Card = ({
  children,
  movieTitle,
  releaseDate,
  overview,
  className,
  pontuation,
}) => {
  const router = useRouter();

  const handleCheckIngress = () => {
    router.replace({
      pathname: `https://www.ingresso.com/filme/${formatedUrlParams(movieTitle)}`,
    });
  }

  const goToTrailer = () => {
    router.replace({
      pathname: `https://www.youtube.com/results`,
      query: { search_query: `${movieTitle} trailer` }
    })
  }

  return (
    <div className={style.cardContainer}>
      <div className={style.cardContainerImage}>{children}</div>
      <div className={style.cardContainerInfo}>
        <h1>{movieTitle}</h1>
        <div className={style.headerCard}>
          <h3>{releaseDate}</h3>
          <span>{star.svg}{pontuation}</span>
        </div>
        <p>{overview}</p>
        <div className={style.cardContainerButtons}>
          <ButtonComponent actionButton={goToTrailer}>Ir para o trailer</ButtonComponent>
          <ButtonComponent actionButton={handleCheckIngress}>Verificar disponibilidade</ButtonComponent>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  movieTitle: PropTypes.string,
};

export default Card;
