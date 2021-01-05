import React, { useState, useEffect } from "react";
import MenuSideBarTab from "./MenuSideBarTab";

const MenuSideBar = (props) => {
  //--props--
  //props from <App>
  const {
    menuBarOnClick,
    getMenuInfo,
    currentPage,
    setCurrentPage,
    getPageTop,
    clickMode,
  } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)
     currentPage : <App>의 state. 현재 위치한 페이지 정보 표시
     setCurrentPage : <App>의 setState함수. 현재 위치한 페이지 정보를 변경.
     getPageTop : 각 page에 맞는 y좌표값을 return할 수 있음.
     clickMode : <App>의 state. scroll시 currentPage(state) 변경을 막기 위함.
  */

  //--state--
  const [onFixed, setOnFixed] = useState(false);

  //--정의함수--
  //scrollTop이 일정지점에 이를 시, state(onFixed) 변경
  const onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    if (scrollTop >= getPageTop(2) - 1) {
      // 간혹 브라우저가 어떤 높이일 때 menuTab 클릭 시 getPageTop의 높이가 -0.000...으로 되는 경우가 있다.
      // 왜 그런지는 도통 모르겠지만 조건에 -1을 주니 해당 문제는 피할 수 있었다.
      // (*원래 -1을 준 이유는 '반올림'의 문제라 생각했기 때문이다. 그런데 그것 때문이 아닌 것 같다.)
      setOnFixed(true);
      if (scrollTop < getPageTop(3) - 1) {
        // console.log("스크롤탑: ", scrollTop, ", getPageTop: ", getPageTop(2));
        setCurrentPage(2);
      } else if (
        scrollTop >= getPageTop(3) - 1 &&
        scrollTop < getPageTop(4) - 1
      ) {
        // console.log("스크롤탑: ", scrollTop, ", getPageTop : ", getPageTop(3));
        setCurrentPage(3);
      } else if (scrollTop >= getPageTop(4) - 1) {
        // console.log("스크롤탑: ", scrollTop, ", getPageTop : ", getPageTop(4));
        setCurrentPage(4);
      }
    } else {
      setOnFixed(false);
      // console.log("스크롤탑: ", scrollTop, ", getPageTop : ", getPageTop(1));
      setCurrentPage(1);
    }
  };

  const getMenuSideBarTab = () => {
    let menuSideBarlist = [];
    let menuName = ["HOME", "MY INFO", "PROJECT", "CONTACT ME"];
    for (let i = 0; i < menuName.length; i++) {
      menuSideBarlist.push(
        <MenuSideBarTab
          key={i}
          tabIndex={i}
          menuName={menuName[i]}
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
          currentPage={currentPage}
        />
      );
    }
    return menuSideBarlist;
  };

  //--useEffect--
  //mount되었을 때, scroll시 onScroll 실행
  //unmount되었을 때, 위 EventListener 제거
  useEffect(() => {
    if (!clickMode) {
      window.addEventListener("scroll", onScroll);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  //--컴포넌트 return문--
  return (
    <div className={`menuSideBar-wrapper${onFixed ? " onFixed" : ""}`}>
      <div className="menuSideBar">{getMenuSideBarTab()}</div>
    </div>
  );
};

export default MenuSideBar;
