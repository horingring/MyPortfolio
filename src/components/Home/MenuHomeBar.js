import React from "react";
import MenuHomeBarTab from "./MenuHomeBarTab";

const MenuHomeBar = (props) => {
  const { menuBarOnClick, getMenuInfo } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)*/

  return (
    <div className="menuHomeBar-wrapper">
      <div className="menuHomeBar">
        <MenuHomeBarTab
          menuName="HOME"
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
        />
        <MenuHomeBarTab
          menuName="MY INFO"
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
        />
        <MenuHomeBarTab
          menuName="PROJECT"
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
        />
        <MenuHomeBarTab
          menuName="CONTACT ME"
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
        />
      </div>
    </div>
  );
};

export default MenuHomeBar;
