import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style.module.scss";
import PropTypes from "prop-types";
import ButtonComponent from "../button";

const Card = ({ children, movieTitle, releaseDate, overview, className }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardContainerImage}>{children}</div>
      <div className={style.cardContainerInfo}>
        <h1>{movieTitle}</h1>
        <h3>{releaseDate}</h3>
        <p>{overview}</p>
        <div className={style.cardContainerButtons}>
          <ButtonComponent>
            Ir para o trailer
          </ButtonComponent>
          <ButtonComponent>
            Verificar disponibilidade
          </ButtonComponent>
        </div>
      </div>
      {/* <h3>{movieTitle}</h3>
      <div className={style.cardContainerImg}>{children}</div>
      <div className={style.cardContainerLink}>
        <Link href="#">Acessar</Link>
      </div> */}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  movieTitle: PropTypes.string,
};

export default Card;
