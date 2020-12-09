import React, { useState } from "react";
import Home from "./components/Home/Home";
import MyInfo from "./components/MyInfo/MyInfo";
import Project from "./components/Project/Project";
import "./App.scss";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const menuBarOnClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="App">
      <Home menuBarOnClick={menuBarOnClick} />
      <MyInfo menuBarOnClick={menuBarOnClick} />
      <Project />
    </div>
  );
};

export default App;
