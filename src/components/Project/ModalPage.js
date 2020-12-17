import React from "react";

const ModalPage = () => {
  return (
    <div className="modalPage-wrapper">
      <div className="modalTitle-box-wrapper">
        <div className="modalTitle-wrapper">
          <h1 className="modalTitle">Pizza Order Service</h1>
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
      <div className="modalContent-box-wrapper">div3</div>
    </div>
  );
};

export default ModalPage;
