import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalContent from "./ModalContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import pizza_homeAndMenu from "../../img/modal/PizzaService_HomeAndMenu.gif";
import pizza_order from "../../img/modal/PizzaService_Order.gif";
import pizza_chatting from "../../img/modal/PizzaService_Chatting.gif";
import portfolio_home from "../../img/modal/MyPortfolio_Home-page.png";
import portfolio_myInfo from "../../img/modal/MyPortfolio_MyInfo-page.png";
import portfolio_project from "../../img/modal/MyPortfolio_Project-page.png";
import portfolio_contactMe from "../../img/modal/MyPortfolio_ContactMe-page.png";

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
          <div className="modalContent-wrapper modalContent-wrapper_pizza_home">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={pizza_homeAndMenu} alt="pizza_homeAndMenu"></img>
              </div>
              <div className="modalContentSection">
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>개요</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>홈 화면 및 메뉴 Bar</li>
                      <li>{`홈 페이지는 <Home> 컴포넌트를 최상단으로 함`}</li>
                      <li>{`메뉴 Bar는 <Menu> 컴포넌트를 최상단으로 함`}</li>
                      <li>모든 페이지의 최하단에는 Footer가 있음</li>
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
                        slick 라이브러리를 사용해 홈 화면을 슬라이더로 구성
                      </li>
                      <li>
                        메뉴 Bar는 React의 Route를 통해 각 컴포넌트와 경로를
                        mapping 하고, React의 Link를 통해 클릭 시 mapping 된
                        컴포넌트가 렌더링 될 수 있도록 함
                      </li>
                      <li>메뉴 Bar는 일부 dropdown 되도록 구현함</li>
                      <li>
                        최초 렌더링 시 Home 문구가 순차적으로 fadeIn 되도록 한
                        점, CSS의 position을 이용한 문구의 배치를 한 점 등 미적
                        요소를 줌
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalContent-wrapper modalContent-wrapper_pizza_order">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={pizza_order} alt="pizza_order"></img>
              </div>
              <div className="modalContentSection">
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>개요</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>피자 주문 페이지</li>
                      <li>
                        일련의 주문과정을 갖고 있으며, 이는 React의 Route와
                        Link를 이용함
                      </li>
                      <li>
                        피자목록 - 피자옵션선택 - 주문정보작성 - 완료 의
                        주문과정을 거침
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
                      <li>
                        클릭으로 인한 페이지 이동 시, 내가 선택한 피자 및 옵션
                        정보가 Server를 거치지 않고 Front 단에서 데이터가 넘어감
                      </li>
                      <li>
                        피자 옵션선택 페이지에서 옵션적용 시 비동기적으로 피자
                        금액을 계산
                      </li>
                      <li>일정 피자 금액에 따라 배달비가 추가로 붙도록 함</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalContent-wrapper modalContent-wrapper_pizza_chatting">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={pizza_chatting} alt="pizza_chatting"></img>
              </div>
              <div className="modalContentSection">
                <div className="modalContentArticle-box">
                  <div className="modalContentArticleTitle-wrapper">
                    <h4>개요</h4>
                  </div>
                  <div className="modalContentArticle">
                    <ul>
                      <li>챗봇 채팅 주문 페이지</li>
                      <li>미완성으로, 채팅 UI만 구현한 상태</li>
                      <li>주문이나 문의 등 다양한 기능 수행을 목적으로 기획</li>
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
                        기본적인 채팅 UI 구색을 갖추고 있으며, 피아식별 가능
                        <br></br>
                        1대 1이 아니라 다대 1이 가능하도록 설계했기에 일반적인
                        채팅 프로그램에도 사용 가능
                      </li>
                      <li>
                        말풍선이 화면 크기를 넘길 경우 scroll 나타남<br></br>새
                        말풍선이 입력될 경우 scroll 최하단으로 focus되도록 구현
                      </li>
                      <li>scroll의 디자인을 customizing 함</li>
                      <li>
                        입력은 submit button 클릭 또는 키보드의 Enter 입력 시
                        동작<br></br>Shift + Enter 시 입력창 내 커서 행 변경
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      );
    } else if (projectNum === 2) {
      return (
        <Slider {...sliderSettings}>
          <div className="modalContent-wrapper modalContent-wrapper_portfolio_home">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={portfolio_home} alt="portfolio_home"></img>
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
                      <li>다음 페이지인 MyInfo로 넘어가는 button이 있음</li>
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
          <div className="modalContent-wrapper modalContent-wrapper_portfolio_myInfo">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={portfolio_myInfo} alt="portfolio_myInfo"></img>
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
          <div className="modalContent-wrapper modalContent-wrapper_portfolio_project">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={portfolio_project} alt="portfolio_project"></img>
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
          <div className="modalContent-wrapper modalContent-wrapper_portfolio_contactMe">
            <div className="modalContent">
              <div className="modalContentSection">
                <img src={portfolio_contactMe} alt="portfolio_contactMe"></img>
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
        {/* <div className="moreDetail-btn-wrapper">
          <div className="moreDetail-btn">
            <p>이 프로젝트 상세보기</p>
          </div>
        </div> */}
        <div className="modalXBtn-wrapper" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
      </div>
      <div className="modalLanguage-box-wrapper">
        <div>Used Tech&nbsp;&nbsp;&nbsp;:</div>
        {getProjectLanguage()}
      </div>
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
