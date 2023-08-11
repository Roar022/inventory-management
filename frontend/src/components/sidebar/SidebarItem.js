import React from "react";
import { MdKeyboardArrowRight } from "react-icons";
const SidebarItem = ({ item, isOpen }) => {
  const [expandMenu, setExpandMenu] = React.useState(false);

  if (item.childrens) {
    return (
      <div
        className={
          expandMenu ? "sidebar-item s-parent open" : "sidebar-item s-parent"
        }
      >
        <div className="sidebar-title">
          <span>
          { 
          item.icon
          &&
          <div className="icons"></div>
           }
          </span>
        </div>
      </div>
    );
  } else {
    <div></div>;
  }
  return <div></div>;
};

export default SidebarItem;
