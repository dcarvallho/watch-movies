import React, { useEffect, useState } from "react";
import Card from "../cards";
import style from "./style.module.scss";
import useTestContext from "../../hooks/use-test-context";

const HomeContainer = () => {
  const [state, setState] = useState([]);
  const { test } = useTestContext()

  return (
    <div className={style.container}>
      <div>
        {state.map((states) => (
          <>
            <div key={states.id}>{states.original_title}</div>
            <div>{states.poster_path}</div>
          </>
        ))}
        <Card />
        Teste de contexto aqui!{test}
      </div>
    </div>
  );
};

export default HomeContainer;
