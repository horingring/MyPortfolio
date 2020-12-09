import React from "react";
import MenuHomeBar from "./MenuHomeBar";
import HomeTitle from "./HomeTitle";
import HomeStartBtn from "./HomeStartBtn";

const Home = (props) => {
  const { menuBarOnClick } = props;
  return (
    <div className="home-wrapper page-wrapper">
      <div className="home">
        <MenuHomeBar />
        <HomeTitle />
        <HomeStartBtn menuBarOnClick={menuBarOnClick} />
      </div>
    </div>
  );
};

export default Home;
