import React, { useState, useRef } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [opt, setOpt] = useState("Home"); // State for active link
  const footerRef = useRef(null); // Create a ref for the footer section

  // Function to scroll to the footer
  const scrollToFooter = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    footerRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to footer
    setOpt("Contact Us"); // Update the active state
  };

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img src={assets.Logo} alt="Logo" />
        </div>
        <div className="list">
          <ul>
            <NavLink
              to="/pharmacy"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/pharmacy/MyProducts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span>Manage Products</span>
            </NavLink>
            <NavLink
              to="/pharmacy/Orders"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span>Orders</span>
            </NavLink>
            <NavLink
              to="/pharmacy/Profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span>Profile</span>
            </NavLink>
            <a href="#ContactUs" className="contact-us">
              <span>Contact Us</span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
