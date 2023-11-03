import React from "react";
import style from "./style.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <h1>Teste navbar</h1>
        <div>
          <button>Meus filmes</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
