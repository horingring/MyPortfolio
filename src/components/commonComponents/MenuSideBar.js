import React from "react";
import MenuSideBarTab from "./MenuSideBarTab";

const MenuSideBar = () => {
  return (
    <div className="menuSideBar-wrapper">
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
