import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuSideBarTab = (props) => {
  const { menuName, tabIndex } = props;

  //props From <App>
  const { menuBarOnClick, getMenuInfo, currentPage } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)
     currentPage : <App>의 state. 현재 위치한 페이지 정보 표시
  */

  const getIconName = () => {
    let { icon_name } = getMenuInfo(menuName);
    return icon_name;
  };

  const onClick = () => {
    let { menu_num } = getMenuInfo(menuName);
    console.log("menuSideBar btn 클릭");
    menuBarOnClick(menu_num);
  };

  return (
    <div
      className={`menuSideBarTab-wrapper ${
        currentPage === tabIndex + 1 ? "onCurrentPage" : ""
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={getIconName()} size="2x" />
    </div>
  );
};

export default MenuSideBarTab;
