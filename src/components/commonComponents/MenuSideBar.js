import React, { useState, useEffect } from "react";
import MenuSideBarTab from "./MenuSideBarTab";

const MenuSideBar = (props) => {
  const { menuBarOnClick, getMenuInfo, currentPage } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)
     currentPage : <App>의 state. 현재 위치한 페이지 정보 표시
  */

  const [onFixed, setOnFixed] = useState(false);

  //scrollTop이 일정지점에 이를 시, state(onFixed) 변경
  const onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    // console.log(scrollTop);
    const homeEl = document.getElementsByClassName("home-wrapper")[0];
    const homeHeight = homeEl.offsetHeight;
    if (scrollTop >= homeHeight) {
      setOnFixed(true);
    } else {
      setOnFixed(false);
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
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`menuSideBar-wrapper${onFixed ? " onFixed" : ""}`}>
      <div className="menuSideBar">{getMenuSideBarTab()}</div>
    </div>
  );
};

export default MenuSideBar;
