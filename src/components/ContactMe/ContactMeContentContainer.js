import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import naverLogo from "../../img/logo/naverLogo.png";

const ContactMeContentContainer = () => {
  const [onCopied, setOnCopied] = useState("Click to Copy");

  const onMouseOverCopyBtn = () => {
    if (onCopied !== "Copied!") {
      const copyMessage = document.getElementsByClassName("copyMessage")[0];
      copyMessage.style.opacity = "1";
    }
  };

  const onMouseOutCopyBtn = () => {
    const copyMessage = document.getElementsByClassName("copyMessage")[0];
    copyMessage.style.opacity = "0";
  };

  //특정 element 안의 내용을 copy하는 함수.
  //범위설정(range) - 선택(selection) - copy - 범위해제  의 순서이다.
  const copyText = () => {
    const eMailAddress = document.getElementsByClassName("eMailAddress")[0];
    const range = document.createRange();
    range.selectNode(eMailAddress.childNodes[0]);

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    document.execCommand("copy");
    sel.removeRange(range);
  };

  //메일주소(복사 버튼) 클릭시 호출되는 함수.
  /* opacity->0(*css의 transition으로 속도조절)
       -  x초 뒤 툴팁 내용 (재)변경  -  textCopy실행
       -  툴팁내용->copied로 변경
     의 순서이다.
  */
  const onClickCopyBtn = () => {
    const copyMessage = document.getElementsByClassName("copyMessage")[0];
    copyMessage.style.opacity = "0";
    setTimeout(() => {
      setOnCopied("Click to Copy");
    }, 800);
    copyText();
    setOnCopied("Copied!");
  };

  return (
    <div className="contactMeContentContainer-wrapper">
      <div className="contactMeContentContainer">
        <div></div>
        <div className="contactMeLink-wrapper">
          <div className="contactMeLink-box">
            <div
              className="contactMeLink"
              onClick={() =>
                window.open("https://blog.naver.com/dldldksl", "_blank")
              }
            >
              <img src={naverLogo} alt="naverLogo"></img>
              <p className="contactMeLinkName">Naver</p>
            </div>
            <div
              className="contactMeLink"
              onClick={() =>
                window.open("https://github.com/horingring", "_blank")
              }
            >
              <FontAwesomeIcon icon={faGithubSquare} size="4x" />
              <p className="contactMeLinkName">Github</p>
            </div>
            <div
              className="contactMeLink"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100003477114101",
                  "_blank"
                )
              }
            >
              <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
              <p className="contactMeLinkName">Facebook</p>
            </div>
            <div
              className="contactMeLink"
              onClick={() =>
                window.open("https://www.instagram.com/e_kho/", "_blank")
              }
            >
              <FontAwesomeIcon icon={faInstagramSquare} size="4x" />
              <p className="contactMeLinkName">Instagram</p>
            </div>
          </div>
        </div>
        <div className="contactMeAddress-wrapper">
          <div className="contactMeAddress">E-mail :</div>
          <div className="contactMeAddress">
            <div
              className="eMailAddress"
              onClick={onClickCopyBtn}
              onMouseOver={onMouseOverCopyBtn}
              onMouseOut={onMouseOutCopyBtn}
            >
              skyhoring@gmail.com
            </div>
            <div className="copyMessage">{onCopied}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeContentContainer;
