import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalPage from "./ModalPage";

const Modal = (props) => {
  const { closeModal } = props;

  const closeModalByOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal-wrapper" onClick={closeModalByOverlay}>
        <div className="modal">
          <Slider {...settings}>
            <ModalPage></ModalPage>
            <div className="modalPage-wrapper">div2</div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Modal;
