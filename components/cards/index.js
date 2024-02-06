import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style.module.scss";
import PropTypes from "prop-types";

const Card = ({ children, movieTitle, className }) => {
  return (
    <div className={style.cardContainer}>
      <h3>{movieTitle}</h3>
      <div className={style.cardContainerImg}>{children}</div>
      <div className={style.cardContainerLink}>
        <Link href="#">Acessar</Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  movieTitle: PropTypes.string,
};

export default Card;
