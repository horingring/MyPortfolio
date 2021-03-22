import React, { useState } from "react";
import Modal from "../Project/Modal";
import ArticlePursuit from "../MyInfo/ArticlePursuit";
import ArticleMyInfo from "../MyInfo/ArticleMyInfo";
import ArticleWebTech from "../Project/ArticleWebTech";
import ArticleProject from "../Project/ArticleProject";

const PageContentSection = (props) => {
  //--props--
  const { contentTitle } = props;

  //--state--
  const [onModal, setOnModal] = useState(false);
  const [initialProjectNum, setInitialProjectNum] = useState(1);

  //--정의함수--
  const openModal = (num) => {
    setInitialProjectNum(num);
    setOnModal(true);
  };

  const closeModal = (e) => {
    setOnModal(false);
  };

  const getNonSpaceContentTitle = () => {
    const nonSpaceContentTitle = contentTitle.replace(/(\s*)/g, "");
    return nonSpaceContentTitle;
  };

  const getTitleComent = () => {
    let titleComment = "";
    if (contentTitle === "Pursuit") {
      titleComment = "다음과 같은 디자인을 추구합니다.";
    } else if (contentTitle === "Web Tech") {
      titleComment = "다음의 기술을 사용할 수 있습니다.";
    } else if (contentTitle === "Project") {
      titleComment = "클릭/터치로 수행한 프로젝트를 열람할 수 있습니다.";
    }
    return titleComment;
  };

  const getSectionArticle = () => {
    if (contentTitle === "Pursuit") {
      return <ArticlePursuit />;
    } else if (contentTitle === "My Info") {
      return <ArticleMyInfo />;
    } else if (contentTitle === "Web Tech") {
      return <ArticleWebTech />;
    } else if (contentTitle === "Project") {
      return <ArticleProject openModal={openModal} />;
    }
  };

  //--컴포넌트 return문--
  return (
    <>
      {onModal ? (
        <Modal closeModal={closeModal} initialProjectNum={initialProjectNum} />
      ) : null}
      <div className="pageContentSection-wrapper">
        <div className="pageContentSection">
          <div className="flexRow">
            <h2>{contentTitle}</h2>
            {contentTitle === "My Info" ? null : <p>{getTitleComent()}</p>}
          </div>
          <div
            className={`sectionArticle flexRow ${getNonSpaceContentTitle()}Article`}
          >
            {getSectionArticle()}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContentSection;
