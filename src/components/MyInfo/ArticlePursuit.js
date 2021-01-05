import React from "react";
import shield from "../../img/logo/pursuit_shield.png";
import copy from "../../img/logo/pursuit_archives.png";
import link from "../../img/logo/pursuit_chat.png";
import bulb from "../../img/logo/pursuit_entrepreneur.png";

const ArticlePursuit = () => {
  //--컴포넌트 return문--
  return (
    <>
      <div className="sectionArticle-column flexColumn">
        <div className="pursuit-box flexRow">
          <div className="pursuitImage-wrapper">
            <img src={shield} alt="shield_icon" className="pursuitImage"></img>
          </div>
          <div className="pursuitExplain-box">
            <div className="pursuitExplainTitle">
              <h3>유지보수성</h3>
            </div>
            <div className="pursuitExplainContent">
              <p>유지보수가 용이한 코딩,</p>
              <p>안정적인 레이아웃</p>
            </div>
          </div>
        </div>
        <div className="pursuit-box flexRow">
          <div className="pursuitImage-wrapper">
            <img src={link} alt="link_icon" className="pursuitImage"></img>
          </div>
          <div className="pursuitExplain-box">
            <div className="pursuitExplainTitle">
              <h3>개연성</h3>
            </div>
            <div className="pursuitExplainContent">
              <p>주제와 컨셉에 맞는 디자인</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionArticle-column flexColumn">
        <div className="pursuit-box flexRow">
          <div className="pursuitImage-wrapper">
            <img src={copy} alt="copy_icon" className="pursuitImage"></img>
          </div>
          <div className="pursuitExplain-box">
            <div className="pursuitExplainTitle">
              <h3>통일성</h3>
            </div>
            <div className="pursuitExplainContent">
              <p>디자인 요소 간의 조화와</p>
              <p>균형을 지키는 디자인</p>
            </div>
          </div>
        </div>
        <div className="pursuit-box flexRow">
          <div className="pursuitImage-wrapper">
            <img src={bulb} alt="bulb_icon" className="pursuitImage"></img>
          </div>
          <div className="pursuitExplain-box">
            <div className="pursuitExplainTitle">
              <h3>전달성</h3>
            </div>
            <div className="pursuitExplainContent">
              <p>높은 가독성,</p>
              <p>편안함을 주는 디자인</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePursuit;
