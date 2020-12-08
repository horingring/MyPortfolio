import React, { useState, useEffect } from "react";
import MenuSideBarTab from "./MenuSideBarTab";

const MenuSideBar = () => {
  const [onFixed, setOnFixed] = useState(false);
  const onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    // console.log(scrollTop);
    if (scrollTop >= 722.4) {
      setOnFixed(true);
    } else {
      setOnFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`menuSideBar-wrapper${onFixed ? " onFixed" : ""}`}>
      <div className="menuSideBar">
        <MenuSideBarTab iconName="faHome" />
        <MenuSideBarTab iconName="faUser" />
        <MenuSideBarTab iconName="faTools" />
        <MenuSideBarTab iconName="faEnvelope" />
      </div>
    </div>
  );
};

export default MenuSideBar;
