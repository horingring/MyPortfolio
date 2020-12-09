import React from "react";
import MenuHomeBar from "./MenuHomeBar";
import HomeTitle from "./HomeTitle";
import HomeStartBtn from "./HomeStartBtn";

const Home = (props) => {
  const { menuBarOnClick, getMenuInfo } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)*/

  return (
    <div className="home-wrapper page-wrapper">
      <div className="home">
        <MenuHomeBar
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
        />
        <HomeTitle />
        <HomeStartBtn menuBarOnClick={menuBarOnClick} />
      </div>
    </div>
  );
};

export default Home;
