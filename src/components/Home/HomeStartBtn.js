import React from "react";

const HomeStartBtn = (props) => {
  // .homeStartBtn-wrapper 클릭 시 <App>의 currentPage(state) 변경

  //props from <App>
  const { menuBarOnClick } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경*/
  const onClick = () => {
    menuBarOnClick(2);
  };

  // useEffect(() => {
  //   scrollToPage(currentPage);
  // });

  return (
    <div className="homeStartBtn-wrapper" onClick={onClick}>
      <div className="homeStartBtn">
        <h2>Let's See</h2>
        <h2>YOUR NEW FACE!</h2>
      </div>
    </div>
  );
};

export default HomeStartBtn;
