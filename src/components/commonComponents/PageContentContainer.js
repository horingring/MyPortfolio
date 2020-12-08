import React from "react";
import PageContentSection from "./PageContentSection";

const PageContentContainer = () => {
  return (
    <div className="pageContentContainer-wrapper">
      <div className="pageContentContainer">
        <PageContentSection contentTitle="Strength" />
        <PageContentSection contentTitle="My Info" />
      </div>
    </div>
  );
};

export default PageContentContainer;
