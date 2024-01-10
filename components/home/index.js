import React, {useEffect} from "react";
import Card from "../cards";
import style from "./style.module.scss";
import useTestContext from "../../hooks/use-test-context";

const HomeContainer = () => {
  const { data } = useTestContext()

  return (
    <div className={style.container}>
      <div>
        <Card>
          <p>Testando children</p>
        </Card>
        {data.map((datas)=>(
          <li key={datas.id}>{datas.title}</li>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
