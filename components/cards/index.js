import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

const Card = ({ children }) => {
  return (
    <>
      <div className={style.cardContainer}>{children}</div>
      <div className={style.cardContainerLink}>
        <Link href="#">Acessar</Link>
      </div>
    </>
  );
};

export default Card;
