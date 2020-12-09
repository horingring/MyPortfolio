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
  const { iconName } = props;

  const getIconInfo = () => {
    let icon_name = null;
    let icon_num = 0;
    if (iconName === "faHome") {
      icon_name = faHome;
      icon_num = 1;
    } else if (iconName === "faUser") {
      icon_name = faUser;
      icon_num = 2;
    } else if (iconName === "faTools") {
      icon_name = faTools;
      icon_num = 3;
    } else if (iconName === "faEnvelope") {
      icon_name = faEnvelope;
      icon_num = 4;
    }
    return { icon_name, icon_num };
  };

  const getIconName = () => {
    let { icon_name } = getIconInfo();
    return icon_name;
  };

  const onClick = () => {
    let { icon_num } = getIconInfo();
    console.log("menuSideBar btn 클릭");
    menuBarOnClick(icon_num);
  };

  return (
    <div className="menuSideBarTab-wrapper" onClick={onClick}>
      <FontAwesomeIcon icon={getIconName()} size="2x" />
    </div>
  );
};

export default MenuSideBarTab;
