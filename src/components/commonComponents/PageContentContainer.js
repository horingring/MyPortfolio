import React from "react";
import PageContentSection from "./PageContentSection";

const PageContentContainer = (props) => {
  //--props--
  const { pageName } = props;

  //--정의함수--
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

  //--컴포넌트 return문--
  return (
    <div className="pageContentContainer-wrapper">
      <div className="pageContentContainer">{getContentSection()}</div>
    </div>
  );
};

export default PageContentContainer;
