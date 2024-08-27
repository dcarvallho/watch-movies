import Head from "next/head";
import React from "react";
import HomeContainer from "../components/home/container/index";

const Home = () => {
  return (
    <>
      <Head>
        <title>Página inicial</title>
      </Head>
      <HomeContainer />
    </>
  );
};

export default Home;
