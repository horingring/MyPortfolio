import React from "react";
import myPicture from "../../img/myInfo_myPicture.jpg";

const ArticleMyInfo = () => {
  //--컴포넌트 return문--
  return (
    <>
      <div className="sectionArticle-column">
        <div className="myInfoImage-wrapper">
          <img src={myPicture} alt="myPicture"></img>
        </div>
      </div>
      <div className="sectionArticle-column flexColumn">
        <div>
          <h2>Who am I ?</h2>
        </div>
        <div>
          <ul>
            <li>상상한 것을 현실로 만들어 내는 프론트엔드 개발자입니다.</li>
            <li>
              현재는 React를 기반으로 한 웹 사이트 프론트엔드를 제작하고
              있습니다.
            </li>
            <li>
              갖고 있는 기술을 견고히 하며, 새로운 기술을 적극적으로 학습하고
              응용하기를 지향합니다.
            </li>
            <li>
              동작 원리에 관심이 많아 기능이나 UI를 분석하거나 직접 구현합니다.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArticleMyInfo;
