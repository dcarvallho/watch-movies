import React from "react";
import style from "./style.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <h1>WatchMovieS</h1>
        <div>
          <button disabled>Meus filmes</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
