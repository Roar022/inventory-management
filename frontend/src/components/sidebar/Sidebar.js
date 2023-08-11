import React from "react";
import "./Sidebar.scss";
import { RiProductHuntLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import menu from "../../data/Sidebar";
import SidebarItem from "./SidebarItem";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // console.log("in sidebar" + children);
  return (
    <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <RiProductHuntLine size={35} style={{ cursor: "pointer" }} />
          </div>
          <div
            className="bars"
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>
      <main
        style={{
          paddingLeft: isOpen ? "230px" : "0px",
          transition: "all 0.5s",
        }}
      >
        {children}
        Sidebar children
      </main>
    </div>
  );
};

export default Sidebar;
