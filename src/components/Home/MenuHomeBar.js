import React from "react";
import MenuHomeBarTab from "./MenuHomeBarTab";

const MenuHomeBar = () => {
  return (
    <div className="menuHomeBar-wrapper">
      <div className="menuHomeBar">
        <MenuHomeBarTab tabName="HOME" />
        <MenuHomeBarTab tabName="MY INFO" />
        <MenuHomeBarTab tabName="PROJECT" />
        <MenuHomeBarTab tabName="CONTACT ME" />
      </div>
    </div>
  );
};

export default MenuHomeBar;
