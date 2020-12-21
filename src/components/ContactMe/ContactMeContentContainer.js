import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import naverLogo from "../../img/naverLogo.png";

const ContactMeContentContainer = () => {
  return (
    <div className="contactMeContentContainer-wrapper">
      <div className="contactMeContentContainer">
        <div></div>
        <div className="contactMeLink-wrapper">
          <div className="contactMeLink-box">
            <div className="contactMeLink">
              <img src={naverLogo} alt="naverLogo"></img>
              <p className="contactMeLinkName">Naver</p>
            </div>
            <div className="contactMeLink">
              <FontAwesomeIcon icon={faGithubSquare} size="4x" />
              <p className="contactMeLinkName">Github</p>
            </div>
            <div className="contactMeLink">
              <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
              <p className="contactMeLinkName">Facebook</p>
            </div>
            <div className="contactMeLink">
              <FontAwesomeIcon icon={faInstagramSquare} size="4x" />
              <p className="contactMeLinkName">Instagram</p>
            </div>
          </div>
        </div>
        <div className="contactMeAddress-wrapper">
          <h1>E-mail :</h1>
          <h1>skyhoring@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactMeContentContainer;
