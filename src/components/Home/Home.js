import React from "react";
import MenuHomeBar from "./MenuHomeBar";
import HomeTitle from "./HomeTitle";
import HomeStartBtn from "./HomeStartBtn";

const Home = () => {
  return (
    <div className="home-wrapper pageContainer-wrapper">
      <div className="home">
        <MenuHomeBar />
        <HomeTitle />
        <HomeStartBtn />
      </div>
    </div>
  );
};

export default Home;
