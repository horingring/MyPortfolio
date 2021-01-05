import React from "react";

const HomeStartBtn = (props) => {
  //--props--
  //props from <App>
  const { menuBarOnClick } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경*/

  //--정의함수--
  const onClick = () => {
    menuBarOnClick(2);
  };

  //--컴포넌트 return문--
  return (
    <div className="homeStartBtn-wrapper">
      <div className="homeStartBtn" onClick={onClick}>
        <h2>Let's See</h2>
        <h2>YOUR NEW FACE!</h2>
      </div>
    </div>
  );
};

export default HomeStartBtn;
