import React from "react";
import style from "./style.module.scss";

const Pagination = ({
  handlePreviousPage,
  handleNextPage,
  showInactive,
  totalPages,
  currentPage,
  showInactiveNext,
}) => {
  return (
    <section aria-label="Paginação" className={style.pagination}>
      <article>
        <p>
          {currentPage} de <strong>{totalPages} páginas</strong>
        </p>
      </article>
      <article className={style.paginationButtons}>
        <button onClick={handlePreviousPage} disabled={showInactive}>
          Anterior
        </button>
        <button onClick={handleNextPage} disabled={showInactiveNext}>Próxima</button>
      </article>
    </section>
  );
};

export default Pagination;
