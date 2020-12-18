import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalContent from "./ModalContent";

const ModalPage = (props) => {
  const { projectNum } = props;

  const getProjectInfoByNum = () => {
    let projectTitle = "";
    if (projectNum === 1) {
      projectTitle = "Pizza Order Service";
      return projectTitle;
    } else if (projectNum === 2) {
      projectTitle = "Web Portfolio";
      return projectTitle;
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
    <div className="modalPage-wrapper">
      <div className="modalTitle-box-wrapper">
        <div className="modalTitle-wrapper">
          <h1 className="modalTitle">{getProjectInfoByNum()}</h1>
        </div>
        <div className="moreDetail-btn-wrapper">
          <div className="moreDetail-btn">
            <p>이 프로젝트 상세보기</p>
          </div>
        </div>
      </div>
      <div className="modalLanguage-box-wrapper">
        <div className="modalLanguage">React</div>
        <div className="modalLanguage">JavaScript</div>
        <div className="modalLanguage">CSS</div>
      </div>
      <div className="modalContent-box-wrapper">
        <Slider {...sliderSettings}>
          <ModalContent />
          <ModalContent />
        </Slider>
      </div>
    </div>
  );
};

export default ModalPage;
