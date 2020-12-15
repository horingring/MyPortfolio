import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import MyInfo from "./components/MyInfo/MyInfo";
import Project from "./components/Project/Project";
import ContactMe from "./components/ContactMe/ContactMe";
import "./App.scss";
import {
  faHome,
  faUser,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [clickMode, setClickMode] = useState(false);

  // 메뉴정보 불러오기(for getIcon, setCurrentPage)
  const getMenuInfo = (menuName) => {
    let icon_name = null;
    let menu_num = 0;
    if (menuName === "HOME") {
      icon_name = faHome;
      menu_num = 1;
    } else if (menuName === "MY INFO") {
      icon_name = faUser;
      menu_num = 2;
    } else if (menuName === "PROJECT") {
      icon_name = faTools;
      menu_num = 3;
    } else if (menuName === "CONTACT ME") {
      icon_name = faEnvelope;
      menu_num = 4;
    }
    return { icon_name, menu_num };
  };

  const menuBarOnClick = (number) => {
    setCurrentPage(number);
    setClickMode(true);
    console.log("clickMode true 완료");
  };

  //scroll시 click모드 -> scroll모드
  const onScroll = () => {
    console.log("onScroll 실행");
    //clickMode(state)가 fasle일 경우 다시 실행시킬 필요가 없다
    setClickMode(false);
    console.log("clickMode false 완료");
  };

  // 각 page의 div를 return하는 함수
  const getPageDivList = () => {
    // 각 page div의 list
    let pageDivList = [];

    //각 page의 div 가져오기
    const homeWrapperDiv = document.getElementsByClassName("home-wrapper")[0];

    const myInfoWrapperDiv = document.getElementsByClassName(
      "myInfo-wrapper"
    )[0];

    const projectWrapperDiv = document.getElementsByClassName(
      "project-wrapper"
    )[0];
    const contactMeWrapperDiv = document.getElementsByClassName(
      "contactMe-wrapper"
    )[0];

    pageDivList = [
      homeWrapperDiv,
      myInfoWrapperDiv,
      projectWrapperDiv,
      contactMeWrapperDiv,
    ];

    return pageDivList;
  };

  // currentPage에 맞는 y좌표(pageAbsoluteTop) 구하는 함수
  const getPageTop = (pageNumber) => {
    let pageDivList = getPageDivList();
    let pageAbsoluteTop = 0;
    pageAbsoluteTop =
      window.pageYOffset +
      pageDivList[pageNumber - 1].getBoundingClientRect().top;
    return pageAbsoluteTop;
  };

  //각 btn에 전달될 scrollTo 함수
  const scrollToPage = (currentPage) => {
    let pageDivList = getPageDivList();
    // 실행문 of scrollToPage
    if (clickMode) {
      console.log("scrollToPage 실행문");
      for (let j = 1; j <= pageDivList.length; j++) {
        if (currentPage === j) {
          window.scrollTo(0, getPageTop(j));
        }
      }
    }
  };

  //첫 mount시, scrollTo(0, 0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //update되었을 때, scroll시 onScroll 실행
  //unmount되었을 때, 위 EventListener 제거
  useEffect(() => {
    if (clickMode) {
      scrollToPage(currentPage);
      window.addEventListener("scroll", onScroll);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className="App">
      <Home
        menuBarOnClick={menuBarOnClick}
        getMenuInfo={getMenuInfo}
        currentPage={currentPage}
      />
      <MyInfo
        menuBarOnClick={menuBarOnClick}
        getMenuInfo={getMenuInfo}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        getPageTop={getPageTop}
        clickMode={clickMode}
      />
      <Project />
      <ContactMe />
    </div>
  );
};

export default App;
