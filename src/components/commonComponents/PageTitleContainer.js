import React from "react";

const PageTitleContainer = (props) => {
  const { titleText } = props;
  return (
    <div className="pageTitleContainer-wrapper">
      <div className="pageTitleContainer">
        <h1>{titleText}</h1>
      </div>
    </div>
  );
};

export default PageTitleContainer;
