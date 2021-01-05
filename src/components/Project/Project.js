import React from "react";
import PageTitleContainer from "../commonComponents/PageTitleContainer";
import PageContentContainer from "../commonComponents/PageContentContainer";

const Project = () => {
  //--컴포넌트 return문--
  return (
    <div className="project-wrapper page-wrapper">
      <div className="project">
        <PageTitleContainer titleText="Skills & Project." />
        <PageContentContainer pageName="project" />
      </div>
    </div>
  );
};

export default Project;
