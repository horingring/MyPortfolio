import React from "react";
import {
  faHome,
  faUser,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuSideBarTab = (props) => {
  const { menuBarOnClick } = props; // for, menuBar클릭시 currentPage state변경
  const { menuName } = props;

  const getMenuInfo = () => {
    let icon_name = null;
    let menu_num = 0;
    if (menuName === "HOME") {
      icon_name = faHome;
      menu_num = 1;
    } else if (menuName === "MY INFO") {
      icon_name = faUser;
      menu_num = 2;
    } else if (menuName === "PROJECT") {
      icon_name = faTools;
      menu_num = 3;
    } else if (menuName === "CONTACT ME") {
      icon_name = faEnvelope;
      menu_num = 4;
    }
    return { icon_name, menu_num };
  };

  const getIconName = () => {
    let { icon_name } = getMenuInfo();
    return icon_name;
  };

  const onClick = () => {
    let { menu_num } = getMenuInfo();
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
