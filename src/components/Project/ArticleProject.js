import React from "react";

const ArticleProject = (props) => {
  //--props--
  const { openModal } = props;

  //--컴포넌트 return문--
  return (
    <>
      <div
        className="sectionArticle-column project-article"
        onClick={() => {
          openModal(1);
        }}
      >
        <div className="project-article-image">
          <div className="project-article-overlay">
            <p>Pizza Order</p>
            <p>Service</p>
          </div>
        </div>
      </div>

      <div
        className="sectionArticle-column project-article"
        onClick={() => {
          openModal(2);
        }}
      >
        <div className="project-article-image">
          <div className="project-article-overlay">
            <p>Web Portfolio</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleProject;
