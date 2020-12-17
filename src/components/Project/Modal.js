import React from "react";

const Modal = (props) => {
  const { closeModal } = props;

  const closeModalByOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal-wrapper" onClick={closeModalByOverlay}>
        <div className="modal">모달창입니다.</div>
      </div>
    </>
  );
};

export default Modal;
