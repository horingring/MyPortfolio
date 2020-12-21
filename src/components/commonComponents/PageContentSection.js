import React, { useState } from "react";
import Modal from "../Project/Modal";

const PageContentSection = (props) => {
  const { contentTitle } = props;

  //state
  const [onModal, setOnModal] = useState(false);
  const [initialProjectNum, setInitialProjectNum] = useState(1);

  const openModal = (num) => {
    setInitialProjectNum(num);
    setOnModal(true);
  };

  const closeModal = (e) => {
    setOnModal(false);
  };

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
          {/*  */}
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
    }
  };

  return (
    <>
      {onModal ? (
        <Modal closeModal={closeModal} initialProjectNum={initialProjectNum} />
      ) : null}
      <div className="pageContentSection-wrapper">
        <div className="pageContentSection">
          <h2>{contentTitle}</h2>
          <div className="sectionArticle flexRow">{getSectionArticle()}</div>
        </div>
      </div>
    </>
  );
};

export default PageContentSection;
