import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pizza_homeAndMenu from "../../../img/modal/PizzaService_HomeAndMenu.gif";
import pizza_order from "../../../img/modal/PizzaService_Order.gif";
import pizza_chatting from "../../../img/modal/PizzaService_Chatting.gif";

const ModalSliderPizzaService = (props) => {
  //--props--
  const { sliderSettings } = props;

  //--컴포넌트 return문--
  return (
    <Slider {...sliderSettings}>
      {/* slide 1 */}
      <div className="modalContent-wrapper modalContent-wrapper_pizza_home">
        <div className="modalContent">
          <div className="modalContentSection">
            <div className="modalImg-box">
              <h2>Home page</h2>
              <img src={pizza_homeAndMenu} alt="pizza_homeAndMenu"></img>
            </div>
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
                  <li>slick 라이브러리를 사용해 홈 화면을 슬라이더로 구성</li>
                  <li>
                    메뉴 Bar는 React의 Route를 통해 각 컴포넌트와 경로를 mapping
                    하고, React의 Link를 통해 클릭 시 mapping 된 컴포넌트가
                    렌더링 될 수 있도록 함
                  </li>
                  <li>메뉴 Bar는 일부 dropdown 되도록 구현함</li>
                  <li>
                    최초 렌더링 시 Home 문구가 순차적으로 fadeIn 되도록 한 점,
                    CSS의 position을 이용한 문구의 배치를 한 점 등 미적 요소를
                    줌
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slide 2 */}
      <div className="modalContent-wrapper modalContent-wrapper_pizza_order">
        <div className="modalContent">
          <div className="modalContentSection">
            <div className="modalImg-box">
              <h2>Pizza Order page</h2>
              <img src={pizza_order} alt="pizza_order"></img>
            </div>
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
                    일련의 주문과정을 갖고 있으며, 이는 React의 Route와 Link를
                    이용함
                  </li>
                  <li>
                    피자목록 - 피자옵션선택 - 주문정보작성 - 완료 의 주문과정을
                    거침
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

      {/* slide 3 */}
      <div className="modalContent-wrapper modalContent-wrapper_pizza_chatting">
        <div className="modalContent">
          <div className="modalContentSection">
            <div className="modalImg-box">
              <h2>Chatbot Chatting page</h2>
              <img src={pizza_chatting} alt="pizza_chatting"></img>
            </div>
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
                    1대 1이 아니라 다대 1이 가능하도록 설계했기에 일반적인 채팅
                    프로그램에도 사용 가능
                  </li>
                  <li>
                    말풍선이 화면 크기를 넘길 경우 scroll 나타남<br></br>새
                    말풍선이 입력될 경우 scroll 최하단으로 focus되도록 구현
                  </li>
                  <li>scroll의 디자인을 customizing 함</li>
                  <li>
                    입력은 submit button 클릭 또는 키보드의 Enter 입력 시 동작
                    <br></br>Shift + Enter 시 입력창 내 커서 행 변경
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ModalSliderPizzaService;
