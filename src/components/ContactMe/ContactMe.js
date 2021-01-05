import React from "react";
import PageTitleContainer from "../commonComponents/PageTitleContainer";
import ContactMeContentContainer from "./ContactMeContentContainer";

const ContactMe = () => {
  //--컴포넌트 return문--
  return (
    <div className="contactMe-wrapper page-wrapper">
      <div className="contactMe">
        <PageTitleContainer titleText="Contact Me." />
        <ContactMeContentContainer />
      </div>
    </div>
  );
};

export default ContactMe;
