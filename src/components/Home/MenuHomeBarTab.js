import React from "react";

const MenuHomeBarTab = (props) => {
  const { menuName } = props;
  const { menuBarOnClick, getMenuInfo } = props;
  /* menuBarOnClick : menuBar클릭시 currentPage state변경
     getMenuInfo : 메뉴정보 불러오기(for getIcon, setCurrentPage)*/

  const onClick = () => {
    let { menu_num } = getMenuInfo(menuName);
    menuBarOnClick(menu_num);
  };

  return (
    <div className="menuHomeBarTab" onClick={onClick}>
      <p>{menuName}</p>
    </div>
  );
};

export default MenuHomeBarTab;
