import React from "react";
import PageContentSection from "./PageContentSection";

const PageContentContainer = (props) => {
  const { pageName } = props;

  const getContentSection = () => {
    if (pageName === "myInfo") {
      return (
        <>
          <PageContentSection contentTitle="Pursuit" />
          <PageContentSection contentTitle="My Info" />
        </>
      );
    } else if (pageName === "project") {
      return (
        <>
          <PageContentSection contentTitle="Web Tech" />
          <PageContentSection contentTitle="Project" />
        </>
      );
    }
  };

  return (
    <div className="pageContentContainer-wrapper">
      <div className="pageContentContainer">{getContentSection()}</div>
    </div>
  );
};

export default PageContentContainer;
