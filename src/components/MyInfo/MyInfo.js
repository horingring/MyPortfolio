import React from "react";
import PageTitleContainer from "../commonComponents/PageTitleContainer";
import PageContentContainer from "../commonComponents/PageContentContainer";
import MenuSideBar from "../commonComponents/MenuSideBar";

const MyInfo = (props) => {
  const { menuBarOnClick, getMenuInfo } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)*/

  return (
    <div className="myInfo-wrapper page-wrapper">
      <div className="myInfo">
        <PageTitleContainer titleText="My Info." />
        <PageContentContainer />
        <MenuSideBar
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
        />
      </div>
    </div>
  );
};

export default MyInfo;
