import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalContent from "./ModalContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import homePageImg from "../../img/modal/MyPortfolio_Home-page.png";
import myInfoPageImg from "../../img/modal/MyPortfolio_MyInfo-page.png";
import projectPageImg from "../../img/modal/MyPortfolio_Project-page.png";
import contactMePageImg from "../../img/modal/MyPortfolio_ContactMe-page.png";

const ModalPage = (props) => {
  const { projectNum, closeModal } = props;

  const getProjectInfoByNum = () => {
    let projectInfo = {};
    let projectTitle = "";
    let projectColor = "";
    let projectLanguage = [];
    if (projectNum === 1) {
      projectTitle = "Pizza Order Service";
      projectColor = "project_pizza-color";
      projectLanguage = ["React", "JavaScript", "jQuery", "css"];
    } else if (projectNum === 2) {
      projectTitle = "Web Portfolio";
      projectColor = "project_portfolio-color";
      projectLanguage = ["React", "JavaScript", "scss"];
    }
    projectInfo = { projectTitle, projectColor, projectLanguage };
    return projectInfo;
  };

  const getProjectLanguage = () => {
    const projectLanguagelist = [];
    const { projectLanguage } = getProjectInfoByNum();
    for (let i = 0; i < projectLanguage.length; i++) {
      projectLanguagelist.push(
        <div className="modalLanguage" key={i}>
          {projectLanguage[i]}
        </div>
      );
    }
    return projectLanguagelist;
  };

  const getModalContent = () => {
    // let modalContentList = [];
    if (projectNum === 1) {
      return (
        <Slider {...sliderSettings}>
          <div className="modalContent-wrapper">
            <div className="modalContent">
              <div className="modalContentSection"></div>
              <div className="modalContentSection">
                <div className="modalContentArticle"></div>
                <div className="modalContentArticle"></div>
                <div className="modalContentArticle"></div>
              </div>
            </div>
          </div>
          <div className="modalContent-wrapper">
            <div className="modalContent">
              <div className="modalContentSection"></div>
              <div className="modalContentSection">
                <div className="modalContentArticle"></div>
                <div className="modalContentArticle"></div>
                <div className="modalContentArticle"></div>
              </div>
            </div>
          </div>
        </Slider>
      );
    } else if (projectNum === 2) {
      return (
        <Slider {...sliderSettings}>
          <div className="modalContent-wrapper modalContent-wrapper_home">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={homePageImg} alt="homePage"></img>
              </div>
              <div className="modalContentSection">
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>개요</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>홈 화면</li>
                      <li>{`<Home> 컴포넌트를 최상단으로 함`}</li>
                    </ul>
                  </div>
                </div>
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>포인트</h4>
                  </div>

                  <div className="modalContentArticle">
                    <ul>
                      <li>다음 페이지인 MyInfo로 넘어가는 btn이 있음</li>
                      <li>
                        모든 페이지로 scroll 이동할 수 있는 메뉴배너가 있음
                      </li>
                      <li>
                        브라우저의 어떤 크기에도 페이지 높이는 100%를 유지
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalContent-wrapper modalContent-wrapper_myInfo">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={myInfoPageImg} alt="myInfoPage"></img>
              </div>
              <div className="modalContentSection">
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>개요</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>나의 정보 소개 페이지</li>
                      <li>{`<MyInfo> 컴포넌트를 최상단으로 함`}</li>
                      <li>
                        프론트엔드 개발자로서 추구하는 디자인 방식과 나의 간단한
                        정보를 기재함
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>포인트</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>이 페이지부터 우측에 고정되는 배너가 나타남</li>
                      <li>scroll 위치에 따라 배너에서 현재 페이지가 표시됨</li>
                      <li>페이지의 title Image를 고정하여 미적 효과를 더함</li>
                      <li>
                        이 페이지의 레이아웃을 이후 페이지에서도 재 사용함
                      </li>
                      <li>전체적인 레이아웃을 반응형으로 제작</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalContent-wrapper modalContent-wrapper_project">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={projectPageImg} alt="projectPage"></img>
              </div>
              <div className="modalContentSection">
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>개요</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>사용가능 Skill과 수행 Project 안내 페이지</li>
                      <li>{`<Project> 컴포넌트를 최상단으로 함`}</li>
                    </ul>
                  </div>
                </div>
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>포인트</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>
                        사용가능한 Skill과 그 기술수행 능력을 Graph로 나타냄
                      </li>
                      <li>
                        Project의 이미지를 클릭 시 나타나는 Modal 창에 수행
                        Project의 정보 기재
                      </li>
                      <li>
                        Modal 창은 slick 라이브러리를 사용한 슬라이더로 Project
                        또는 내용을 넘길 수 있음
                      </li>
                      <li>
                        Modal 창 바깥의 Mask, 내부의 X 버튼을 Mouse 클릭 또는
                        키보드의 Esc 버튼을 통해 모달창 닫기 가능
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalContent-wrapper modalContent-wrapper_contactMe">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={contactMePageImg} alt="contactMePage"></img>
              </div>
              <div className="modalContentSection">
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>개요</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>연락을 위한 SNS 링크 및 E-Mail 주소 공유</li>
                      <li>{`<ContactMe> 컴포넌트를 최상단으로 함`}</li>
                    </ul>
                  </div>
                </div>
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>포인트</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>
                        fontAwesome에서 제공하는 라이브러리를 통한 이모티콘 사용
                      </li>
                      <li>각 SNS 이모티콘을 클릭 시 새 탭에서 링크 연결</li>
                      <li>
                        E-Mail 주소 클릭 시 E-Mail 주소를 클립보드에 복사 기능
                        구현
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      );
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className={`modalPage-wrapper ${
        getProjectInfoByNum() ? getProjectInfoByNum().projectColor : ""
      }`}
    >
      <div className="modalTitle-box-wrapper">
        <div className="modalTitle-wrapper">
          <h1 className="modalTitle">{getProjectInfoByNum().projectTitle}</h1>
        </div>
        <div className="moreDetail-btn-wrapper">
          <div className="moreDetail-btn">
            <p>이 프로젝트 상세보기</p>
          </div>
        </div>
        <div className="modalXBtn-wrapper" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
      </div>
      <div className="modalLanguage-box-wrapper">{getProjectLanguage()}</div>
      <div className="modalContent-box-wrapper">
        {getModalContent()}
        {/* <Slider {...sliderSettings}>
            <ModalContent />
            <ModalContent />
          </Slider> */}
      </div>
    </div>
  );
};

export default ModalPage;
