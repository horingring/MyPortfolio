import React, { useState } from "react";
import Modal from "../Project/Modal";
import shield from "../../img/logo/pursuit_shield.png";
import copy from "../../img/logo/pursuit_archives.png";
import link from "../../img/logo/pursuit_chat.png";
import bulb from "../../img/logo/pursuit_entrepreneur.png";
import myPicture from "../../img/myInfo_myPicture.jpg";
import htmlLogo from "../../img/logo/html_logo.png";
import cssLogo from "../../img/logo/css_logo.png";
import jsLogo from "../../img/logo/js_logo.png";
import reactLogo from "../../img/logo/React_logo.png";
import githubLogo from "../../img/logo/github_logo.png";
import sassLogo from "../../img/logo/sass_logo.png";

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

  const getNonSpaceContentTitle = () => {
    const nonSpaceContentTitle = contentTitle.replace(/(\s*)/g, "");
    return nonSpaceContentTitle;
  };

  const getSectionArticle = () => {
    if (contentTitle === "Pursuit") {
      return (
        <>
          <div className="sectionArticle-column flexColumn">
            <div className="pursuit-box flexRow">
              <div className="pursuitImage-wrapper">
                <img
                  src={shield}
                  alt="shield_icon"
                  className="pursuitImage"
                ></img>
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
    } else if (contentTitle === "My Info") {
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
                  갖고 있는 기술을 견고히 하며, 새로운 기술을 적극적으로
                  학습하고 응용하기를 지향합니다.
                </li>
                <li>
                  동작 원리에 관심이 많아 기능이나 UI를 분석하거나 직접
                  구현합니다.
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    } else if (contentTitle === "Web Tech") {
      return (
        <>
          <div className="sectionArticle-column">
            <div className="webTech-box-wrapper">
              <div className="webTech-box">
                <div className="webTechImage-wrapper">
                  <img src={htmlLogo} alt="html_logo"></img>
                </div>
                <div className="webTechGraph-wrapper">
                  <div className="webTechGraph webTechGraph_html">
                    <span>HTML</span>
                  </div>
                  <div className="webTechGraphPercent">80%</div>
                </div>
              </div>
            </div>
            <div className="webTech-box-wrapper">
              <div className="webTech-box">
                <div className="webTechImage-wrapper">
                  <img src={cssLogo} alt="css_logo"></img>
                </div>
                <div className="webTechGraph-wrapper">
                  <div className="webTechGraph webTechGraph_css">
                    <span>CSS</span>
                  </div>
                  <div className="webTechGraphPercent">80%</div>
                </div>
              </div>
            </div>
            <div className="webTech-box-wrapper">
              <div className="webTech-box">
                <div className="webTechImage-wrapper">
                  <img src={jsLogo} alt="js_logo"></img>
                </div>
                <div className="webTechGraph-wrapper">
                  <div className="webTechGraph webTechGraph_js">
                    <span>Javascript</span>
                  </div>
                  <div className="webTechGraphPercent">60%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sectionArticle-column">
            <div className="webTech-box-wrapper">
              <div className="webTech-box">
                <div className="webTechImage-wrapper">
                  <img src={reactLogo} alt="react_logo"></img>
                </div>
                <div className="webTechGraph-wrapper">
                  <div className="webTechGraph webTechGraph_react">
                    <span>React</span>
                  </div>
                  <div className="webTechGraphPercent">70%</div>
                </div>
              </div>
            </div>
            <div className="webTech-box-wrapper">
              <div className="webTech-box">
                <div className="webTechImage-wrapper">
                  <img src={githubLogo} alt="github_logo"></img>
                </div>
                <div className="webTechGraph-wrapper">
                  <div className="webTechGraph webTechGraph_github">
                    <span>Github</span>
                  </div>
                  <div className="webTechGraphPercent">40%</div>
                </div>
              </div>
            </div>
            <div className="webTech-box-wrapper">
              <div className="webTech-box">
                <div className="webTechImage-wrapper">
                  <img src={sassLogo} alt="sass_logo"></img>
                </div>
                <div className="webTechGraph-wrapper">
                  <div className="webTechGraph webTechGraph_sass">
                    <span>Sass</span>
                  </div>
                  <div className="webTechGraphPercent">50%</div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="flexRow">
            <h2>{contentTitle}</h2>
            {contentTitle === "Pursuit" ? (
              <p>다음과 같은 디자인을 추구합니다.</p>
            ) : null}
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
