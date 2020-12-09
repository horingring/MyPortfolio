import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuSideBarTab = (props) => {
  const { menuName } = props;
  const { menuBarOnClick, getMenuInfo } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)*/

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
    <div className="menuSideBarTab-wrapper" onClick={onClick}>
      <FontAwesomeIcon icon={getIconName()} size="2x" />
    </div>
  );
};

export default MenuSideBarTab;
