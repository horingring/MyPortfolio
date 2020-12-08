import React from "react";
import Home from "./components/Home/Home";
import MyInfo from "./components/MyInfo/MyInfo";
import Project from "./components/Project/Project";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Home />
      <MyInfo />
      <Project />
    </div>
  );
};

export default App;
