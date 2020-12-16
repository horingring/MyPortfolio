import React from "react";

const PageContentSection = (props) => {
  const { contentTitle } = props;

  const getSectionArticle = () => {
    if (contentTitle === "Strength") {
      return (
        <>
          <div className="sectionArticle-column">1</div>
          <div className="sectionArticle-column">2</div>
        </>
      );
    } else if (contentTitle === "My Info") {
      return (
        <>
          <div className="sectionArticle-column">1</div>
          <div className="sectionArticle-column">2</div>
        </>
      );
    } else if (contentTitle === "Web Tech") {
      return (
        <>
          <div className="sectionArticle-column">1</div>
          <div className="sectionArticle-column">2</div>
        </>
      );
    } else if (contentTitle === "Project") {
      return (
        <>
          <div className="sectionArticle-column project-article">
            <div className="project-article-image">
              <div className="project-article-overlay">
                <p>Pizza Order</p>
                <p>Service</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="sectionArticle-column project-article">
            <div className="project-article-image">
              <div className="project-article-overlay">
                <p>Web Portfolio</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="pageContentSection-wrapper">
      <div className="pageContentSection">
        <h2>{contentTitle}</h2>
        <div className="sectionArticle flexRow">{getSectionArticle()}</div>
      </div>
    </div>
  );
};

export default PageContentSection;
