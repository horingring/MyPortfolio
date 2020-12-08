import React from "react";

const PageContentSection = (props) => {
  const { contentTitle } = props;
  return (
    <div className="pageContentSection-wrapper">
      <div className="pageContentSection">
        <h2>{contentTitle}</h2>
        <div className="sectionArticle flexRow">
          <div className="sectionArticle-column">1</div>
          <div className="sectionArticle-column">2</div>
        </div>
      </div>
    </div>
  );
};

export default PageContentSection;
