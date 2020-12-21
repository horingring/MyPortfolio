import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalPage from "./ModalPage";

const Modal = (props) => {
  const { closeModal, initialProjectNum } = props;

  const closeModalByOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    initialSlide: initialProjectNum - 1,
  };

  return (
    <>
      <div className="modal-overlay"></div>
      <div
        className="modal-wrapper"
        onClick={closeModalByOverlay}
        onKeyDown={(e) => {
          //modal창을 한번 클릭해야만 동작하는 문제가 있음
          if (e.keyCode === 27) {
            closeModal();
          }
        }}
      >
        <div className="modal">
          <Slider {...settings}>
            <ModalPage projectNum={1} closeModal={closeModal} />
            <ModalPage projectNum={2} closeModal={closeModal} />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Modal;
