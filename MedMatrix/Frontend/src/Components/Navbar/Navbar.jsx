import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [opt, setopt] = useState("Home");

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img src={assets.logo} alt="Logo" />
        </div>
        <div className="list">
          <ul>
            <NavLink
              to='/pharmacy'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setopt("Home")}
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to='/pharmacy/My Products'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setopt("My Products")}
            >
              <span>My Products</span>
            </NavLink>
            <NavLink
              to='/pharmacy/Orders'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setopt("Orders")}
            >
              <span>Orders</span>
            </NavLink>
            <NavLink
              to='/pharmacy/Sales Analytics'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setopt("Sales Analytics")}
            >
              <span>Sales Analytics</span>
            </NavLink>
            <NavLink
              to='/pharmacy/Profile'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setopt("Profile")}
            >
              <span>Profile</span>
            </NavLink>
            <a
              href="/pharmacy/ContactUs"
              onClick={() => {
                setopt("Contact Us");
              }}
              className={opt === "Contact Us" ? "active contact-us" : ""}
            >
              <span>Contact Us</span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
