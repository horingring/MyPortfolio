import React from "react";
import PageTitleContainer from "../commonComponents/PageTitleContainer";
import PageContentContainer from "../commonComponents/PageContentContainer";
import MenuSideBar from "../commonComponents/MenuSideBar";

const MyInfo = (props) => {
  const { menuBarOnClick, getMenuInfo, currentPage } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)
     currentPage : <App>의 state. 현재 위치한 페이지 정보 표시
  */

  return (
    <div className="myInfo-wrapper page-wrapper">
      <div className="myInfo">
        <PageTitleContainer titleText="My Info." />
        <PageContentContainer />
        <MenuSideBar
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default MyInfo;
