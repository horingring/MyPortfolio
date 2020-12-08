import React from "react";
import PageTitleContainer from "../commonComponents/PageTitleContainer";
import PageContentContainer from "../commonComponents/PageContentContainer";
import MenuSideBar from "../commonComponents/MenuSideBar";

const MyInfo = () => {
  return (
    <div className="myInfo-wrapper page-wrapper">
      <div className="myInfo">
        <PageTitleContainer titleText="My Info." />
        <PageContentContainer />
        <MenuSideBar />
      </div>
    </div>
  );
};

export default MyInfo;
