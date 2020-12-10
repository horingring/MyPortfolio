import React from "react";
import MenuHomeBarTab from "./MenuHomeBarTab";

const MenuHomeBar = (props) => {
  const { menuBarOnClick, getMenuInfo, currentPage } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)
     currentPage : <App>의 state. 현재 위치한 페이지 정보 표시
  */

  const getMenuHomeBarTab = () => {
    let menuHomeBarlist = [];
    const menuName = ["HOME", "MY INFO", "PROJECT", "CONTACT ME"];
    for (let i = 0; i < menuName.length; i++) {
      menuHomeBarlist.push(
        <MenuHomeBarTab
          key={i}
          tabIndex={i}
          menuName={menuName[i]}
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
          currentPage={currentPage}
        />
      );
    }
    return menuHomeBarlist;
  };

  return (
    <div className="menuHomeBar-wrapper">
      <div className="menuHomeBar">
        {getMenuHomeBarTab()}
        {/* <MenuHomeBarTab
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
        /> */}
      </div>
    </div>
  );
};

export default MenuHomeBar;
