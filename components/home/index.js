import React, { useEffect, useState } from "react";
import Card from "../cards";
import style from "./style.module.scss";

const HomeContainer = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=bf1a66b28fd724d2769e4f66cc665bc0",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setState(data.results))
      .catch((err) => console.log(err));
  }, []);

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
      </div>
    </div>
  );
};

export default HomeContainer;
