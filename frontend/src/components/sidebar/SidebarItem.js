import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";



const SidebarItem = ({ item, isOpen }) => {
  // console.log(item);
  const [expandMenu, setExpandMenu] = React.useState(false);
  const activeSublink = ({ isActive }) => (isActive ? "active" : "link");
  const activeLink = ({ isActive }) => (isActive ? "active" : "link");
  if (item.childrens) {
    return (
      <div
        className={
          expandMenu ? "sidebar-item s-parent open" : "sidebar-item s-parent"
        }
      >
        <div className="sidebar-title">
          <span>
            {item.icon && <div className="icons">{item.icon}</div>}
            {isOpen && <div>{item.title}</div>}
          </span>
          <AiOutlineRight
            size={20}
            className="arrow-icon"
            onClick={() => setExpandMenu(!expandMenu)}
          />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => {
            return (
              <div key={index} className="s-child">
                <NavLink to={child.path} className={activeSublink}>
                  <div className="sidebar-item">
                    <div className="sidebar-title">
                      <span>
                        {child.icon && <div className="icon">{child.icon}</div>}
                        {isOpen && <div>{child.title}</div>}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path} className={activeLink}>
        <div className="sidebar-item s-parent">
          <div className="sidebar-title">
            <span>
              {item.icon && <div className="icon">{item.icon}</div>}
              {isOpen && <div>{item.title}</div>}
            </span>
          </div>
        </div>
      </NavLink>
    );
  }
};

export default SidebarItem;
