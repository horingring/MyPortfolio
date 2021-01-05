import React from "react";

const PageTitleContainer = (props) => {
  //--props--
  const { titleText } = props;

  //--컴포넌트 return문--
  return (
    <div className="pageTitleContainer-wrapper">
      <div className="pageTitleContainer">
        <h1>{titleText}</h1>
      </div>
    </div>
  );
};

export default PageTitleContainer;
