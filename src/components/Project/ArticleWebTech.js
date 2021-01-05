import React, { useState, useEffect } from "react";
import htmlLogo from "../../img/logo/html_logo.png";
import cssLogo from "../../img/logo/css_logo.png";
import jsLogo from "../../img/logo/js_logo.png";
import reactLogo from "../../img/logo/React_logo.png";
import githubLogo from "../../img/logo/github_logo.png";
import sassLogo from "../../img/logo/sass_logo.png";

const ArticleWebTech = () => {
  //--state--
  const [onGraphArea, setOnGraphArea] = useState(false);

  //--정의함수--
  const onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    const graphAreaTop =
      window.pageYOffset +
      document.getElementsByClassName("myInfo")[0].getBoundingClientRect().top +
      (document
        .getElementsByClassName("webTechGraph_js")[0]
        .getBoundingClientRect().top +
        10 -
        document.getElementsByClassName("project")[0].getBoundingClientRect()
          .top);

    const graphAreaBottom =
      window.pageYOffset +
      document
        .getElementsByClassName("WebTechArticle")[0]
        .getBoundingClientRect().bottom -
      10;
    if (scrollTop >= graphAreaTop && scrollTop <= graphAreaBottom) {
      setOnGraphArea(true);
    } else {
      setOnGraphArea(false);
    }
  };

  //--useEffect--
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  //--컴포넌트 return문--
  return (
    <>
      <div className="sectionArticle-column">
        <div className="webTech-box-wrapper">
          <div className="webTech-box">
            <div className="webTechImage-wrapper">
              <img src={htmlLogo} alt="html_logo"></img>
            </div>
            <div className="webTechGraph-wrapper">
              <div
                className={`webTechGraph webTechGraph_html ${
                  onGraphArea ? "onGraphArea" : ""
                }`}
              >
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
              <div
                className={`webTechGraph webTechGraph_css ${
                  onGraphArea ? "onGraphArea" : ""
                }`}
              >
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
              <div
                className={`webTechGraph webTechGraph_js ${
                  onGraphArea ? "onGraphArea" : ""
                }`}
              >
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
              <div
                className={`webTechGraph webTechGraph_react ${
                  onGraphArea ? "onGraphArea" : ""
                }`}
              >
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
              <div
                className={`webTechGraph webTechGraph_github ${
                  onGraphArea ? "onGraphArea" : ""
                }`}
              >
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
              <div
                className={`webTechGraph webTechGraph_sass ${
                  onGraphArea ? "onGraphArea" : ""
                }`}
              >
                <span>Sass</span>
              </div>
              <div className="webTechGraphPercent">50%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleWebTech;
