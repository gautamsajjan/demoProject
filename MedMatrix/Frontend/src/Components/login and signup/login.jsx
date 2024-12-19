import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./loginForm";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // Added role state
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }), // Include role in login request
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        if (data.user && data.user.role === "pharmacy") {
          onLogin(data); // Store user data in App state
          navigate("/pharmacy");
        } else if(data.user && data.user.role === "customer") {
            onLogin(data); // Store user data in App state
          navigate("/customer");
        }
        else {
          setErrorMessage("Access restricted.");
        }
      } else {
        setErrorMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <LoginForm
        handleLogin={handleLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        role={role} // Pass role to LoginForm
        setRole={setRole} // Pass setRole to LoginForm
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Login;
