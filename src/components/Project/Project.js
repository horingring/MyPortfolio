import React from "react";
import PageTitleContainer from "../commonComponents/PageTitleContainer";
import PageContentContainer from "../commonComponents/PageContentContainer";

const Project = () => {
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
