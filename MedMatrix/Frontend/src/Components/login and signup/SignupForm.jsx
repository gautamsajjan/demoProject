import React, { useState } from 'react';
import './signup.css';

const SignupForm = ({ handleSubmit, formData, handleChange, error }) => {

  return (
    

    <div className="body">
      <header className="header">
        <div className="header-container">
          <img src='#' alt="MedMatrix Logo" className="logo" />
          <h1>MedMatrix</h1>
        </div>
      </header>
      
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Sign up to MedMatrix</h2>

          {/* Show Full Name only for Customers */}
          {formData.role === 'customer' && (
            <div className="input-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="input-field"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="input-field"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="input-field"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              className="input-field full-width"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="customer">Customer</option>
              <option value="pharmacy">Pharmacy</option>
            </select>
          </div>

          {/* Fields for Pharmacist role */}
          {formData.role === 'pharmacy' && (
            <>
              <div className="input-group">
                <label htmlFor="pharmacyName">Pharmacy Name</label>
                <input
                  type="text"
                  id="pharmacyName"
                  name="pharmacyName"
                  className="input-field"
                  placeholder="Pharmacy Name"
                  value={formData.pharmacyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="registrationCode">Pharmacy Registration Code</label>
                <input
                  type="text"
                  id="registrationCode"
                  name="registrationCode"
                  className="input-field"
                  placeholder="Pharmacy Registration Code"
                  value={formData.registrationCode}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="pharmacyAddress">Pharmacy Address</label>
                <input
                  type="text"
                  id="pharmacyAddress"
                  name="pharmacyAddress"
                  className="input-field"
                  placeholder="Pharmacy Address"
                  value={formData.pharmacyAddress}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="/" className="create-account">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
