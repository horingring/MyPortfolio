import React, { useState, useEffect } from "react";
import MenuSideBarTab from "./MenuSideBarTab";

const MenuSideBar = (props) => {
  const { menuBarOnClick } = props; // for, menuBar클릭시 currentPage state변경

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
      <div className="menuSideBar">
        <MenuSideBarTab iconName="faHome" menuBarOnClick={menuBarOnClick} />
        <MenuSideBarTab iconName="faUser" menuBarOnClick={menuBarOnClick} />
        <MenuSideBarTab iconName="faTools" menuBarOnClick={menuBarOnClick} />
        <MenuSideBarTab iconName="faEnvelope" menuBarOnClick={menuBarOnClick} />
      </div>
    </div>
  );
};

export default MenuSideBar;
