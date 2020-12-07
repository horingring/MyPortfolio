import React from "react";
import Home from "./components/Home/Home";
import PageContainer from "./components/PageContainer/PageContainer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Home />
      <PageContainer />
      <PageContainer />
    </div>
  );
};

export default App;
