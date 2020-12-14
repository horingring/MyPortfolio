import React, { useState, useEffect } from "react";
import MenuSideBarTab from "./MenuSideBarTab";

const MenuSideBar = (props) => {
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

  const [onFixed, setOnFixed] = useState(false);

  //scrollTop이 일정지점에 이를 시, state(onFixed) 변경
  const onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    console.log(scrollTop);
    if (scrollTop >= getPageTop(2)) {
      setOnFixed(true);
      if (scrollTop < getPageTop(3)) {
        setCurrentPage(2);
      } else if (scrollTop >= getPageTop(3) && scrollTop < getPageTop(4)) {
        setCurrentPage(3);
      } else if (scrollTop >= getPageTop(4)) {
        setCurrentPage(4);
      }
    } else {
      setOnFixed(false);
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

  return (
    <div className={`menuSideBar-wrapper${onFixed ? " onFixed" : ""}`}>
      <div className="menuSideBar">{getMenuSideBarTab()}</div>
    </div>
  );
};

export default MenuSideBar;
