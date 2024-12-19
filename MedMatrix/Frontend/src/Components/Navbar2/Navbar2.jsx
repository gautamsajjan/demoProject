import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './Navbar2.css';
import { assets } from '../../assets/assets';

const Navbar2 = () => {
  const location = useLocation();

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img src={assets.Logo} alt="Logo" />
        </div>
        <div className="list">
          <ul>
            <NavLink
              to='/customer'
              className={location.pathname === '/customer' ? 'active' : ''}
              end
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to='/customer/Shop'
              className={location.pathname === '/customer/Shop' ? 'active' : ''}
            >
              <span>Pharmacy</span>
            </NavLink>
            <NavLink
              to='/customer/Cart'
              className={location.pathname === '/customer/Cart' ? 'active' : ''}
            >
              <span>Cart</span>
            </NavLink>
            <NavLink
              to='/customer/Appointment'
              className={location.pathname === '/customer/Appointment' ? 'active' : ''}
            >
              <span>Appointment</span>
            </NavLink>
            <NavLink
              to='/customer/Profile'
              className={location.pathname === '/customer/Profile' ? 'active' : ''}
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

export default Navbar2;