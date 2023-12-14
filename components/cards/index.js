import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

const Card = () => {
  return (
    <div className={style.cardContainer}>
      <Image />
      <div className={style.cardContainerLink}>
        <Link href="#">
          Acessar
        </Link>
      </div>
    </div>
  );
};

export default Card;
