// Sidebar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTachometerAlt,faBox,faTags,faBlog,faBars,} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <div>
        <button className="menu-toggle">
          <i class="fa-solid fa-bars" onClick={toggleSidebar}></i>
        </button>

        <nav className="logo">
          <NavLink to="/">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span> Dashboard</span>
          </NavLink>
        </nav>

        <nav className="all_icon">
          <NavLink to="/product_category">
            <FontAwesomeIcon icon={faBox} />
            <span> Product Category</span>
          </NavLink>
          <NavLink to="/blog_category">
            <FontAwesomeIcon icon={faTags} />
            <span> Blog Category</span>
          </NavLink>
          <NavLink to="/blogs">
            <FontAwesomeIcon icon={faBlog} />
            <span> Blogs</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
// {`sidebar ${isOpen ? "open" : ""}`}
export default Sidebar;
