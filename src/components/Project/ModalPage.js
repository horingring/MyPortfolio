import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalContent from "./ModalContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <Slider {...sliderSettings}>
          <ModalContent />
          <ModalContent />
        </Slider>
      </div>
    </div>
  );
};

export default ModalPage;
