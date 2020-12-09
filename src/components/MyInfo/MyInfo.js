import React from "react";
import PageTitleContainer from "../commonComponents/PageTitleContainer";
import PageContentContainer from "../commonComponents/PageContentContainer";
import MenuSideBar from "../commonComponents/MenuSideBar";

const MyInfo = (props) => {
  const { menuBarOnClick } = props; // for, menuBar클릭시 currentPage state변경

  return (
    <div className="myInfo-wrapper page-wrapper">
      <div className="myInfo">
        <PageTitleContainer titleText="My Info." />
        <PageContentContainer />
        <MenuSideBar menuBarOnClick={menuBarOnClick} />
      </div>
    </div>
  );
};

export default MyInfo;
