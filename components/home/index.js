import React, {useEffect} from "react";
import Card from "../cards";
import style from "./style.module.scss";
import useTestContext from "../../hooks/use-test-context";

const HomeContainer = () => {
  const { data } = useTestContext()

  return (
    <div className={style.container}>
      <div>
        {data.map((datas) => (
          <Card key={datas.id} movieTitle={datas.title}>
            <img src={datas.poster_path} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
