import React from "react";
import PageTitleContainer from "../commonComponents/PageTitleContainer";
import PageContentContainer from "../commonComponents/PageContentContainer";
import MenuSideBar from "../commonComponents/MenuSideBar";

const MyInfo = (props) => {
  //--props--
  //props from <App>
  const {
    menuBarOnClick,
    getMenuInfo,
    currentPage,
    setCurrentPage,
    getPageTop,
    clickMode,
  } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)
     currentPage : <App>의 state. 현재 위치한 페이지 정보 표시
     setCurrentPage : <App>의 setState함수. 현재 위치한 페이지 정보를 변경.
     getPageTop : 각 page에 맞는 y좌표값을 return할 수 있음.
     clickMode : <App>의 state. scroll시 currentPage(state) 변경을 막기 위함.
  */

  //--컴포넌트 return문--
  return (
    <div className="myInfo-wrapper page-wrapper">
      <div className="myInfo">
        <PageTitleContainer titleText="My Info." />
        <PageContentContainer pageName="myInfo" />
        <MenuSideBar
          menuBarOnClick={menuBarOnClick}
          getMenuInfo={getMenuInfo}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          getPageTop={getPageTop}
          clickMode={clickMode}
        />
      </div>
    </div>
  );
};

export default MyInfo;
