import React from "react";
import "./Bgshop.css";

const Bgshop = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="text-section">
          <p>
            Welcome to <strong>MedMatrix</strong>, your trusted online platform 
            for accessing a wide range of medical products. From essential 
            medicines to healthcare tools, we connect customers with reliable 
            pharmacies for convenient and safe shopping. Prioritize your health 
            with just a few clicks.
          </p>
        </div>
        <div className="action-section">
          <header className="header">
            <h1>Care Delivered to Your Doorstep</h1>
            <p>Connecting Customers with Trusted Pharmacies and Healthcare Essentials</p>
          </header>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Medical Products"
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bgshop;
