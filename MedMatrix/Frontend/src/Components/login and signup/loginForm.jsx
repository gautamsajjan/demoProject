



import React from "react";

const LoginForm = ({
  handleLogin,
  email,
  setEmail,
  password,
  setPassword,
  role,
  setRole, 
  errorMessage,
}) => {
  const handleRoleChange = (e) => {
    setRole(e.target.value); // Update role state
  };

  return (
    <div>
      <header>
        <div className="header-container">
          <img src="/logo.jpeg" alt="Krishi Sanjal Logo" className="logo" />
          <h1>Krishi Sanjal</h1>
        </div>
      </header>

      <div className="form">
        <form onSubmit={handleLogin}>
          <h1>Login to Krishi Sanjal</h1>

          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Username or Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bx bxs-user"></i>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
          </div>

          {/* Role Selection moved to the end */}
          <div className="input-box">
            <label htmlFor="role">Select Role</label>
            <div className="input-field">
              <select
                id="role"
                name="role"
                value={role}
                onChange={handleRoleChange}
                required
              >
                <option value="pharmacy">Pharmacy</option>
                <option value="customer">Customer</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="form-footer">
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="create-account">
                Create New Account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
