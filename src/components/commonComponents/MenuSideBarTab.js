import React from "react";
import {
  faHome,
  faUser,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuSideBarTab = (props) => {
  const { iconName } = props;

  const getIcon = () => {
    let icon_name = null;
    if (iconName === "faHome") {
      icon_name = faHome;
    } else if (iconName === "faUser") {
      icon_name = faUser;
    } else if (iconName === "faTools") {
      icon_name = faTools;
    } else if (iconName === "faEnvelope") {
      icon_name = faEnvelope;
    }
    return icon_name;
  };

  return (
    <div className="menuSideBarTab-wrapper">
      <FontAwesomeIcon icon={getIcon()} size="2x" />
    </div>
  );
};

export default MenuSideBarTab;
