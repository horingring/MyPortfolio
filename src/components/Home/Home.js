import React from "react";
import MenuHomeBar from "./MenuHomeBar";
import HomeTitle from "./HomeTitle";
import HomeStartBtn from "./HomeStartBtn";

const Home = (props) => {
  //--props--
  //props from <App>
  const { menuBarOnClick, getMenuInfo, currentPage } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)
     currentPage : <App>의 state. 현재 위치한 페이지 정보 표시
  */

  //--컴포넌트 return문--
  return (
    <div className="home-wrapper page-wrapper">
      <div className="home">
        <MenuHomeBar
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
          currentPage={currentPage}
        />
        <HomeTitle />
        <HomeStartBtn menuBarOnClick={menuBarOnClick} />
      </div>
    </div>
  );
};

export default Home;
