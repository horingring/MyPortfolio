import React, { useState } from "react";
import Home from "./components/Home/Home";
import MyInfo from "./components/MyInfo/MyInfo";
import Project from "./components/Project/Project";
import "./App.scss";
import {
  faHome,
  faUser,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 메뉴정보 불러오기(for getIcon, setCurrentPage)
  const getMenuInfo = (menuName) => {
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

  const menuBarOnClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="App">
      <Home menuBarOnClick={menuBarOnClick} getMenuInfo={getMenuInfo} />
      <MyInfo menuBarOnClick={menuBarOnClick} getMenuInfo={getMenuInfo} />
      <Project />
    </div>
  );
};

export default App;
