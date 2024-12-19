import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Components/login and signup/Signup';
import Login from './Components/login and signup/login';
import PharmacyPage from './Components/PharmacyPage/PharmacyPage';
import CustomerPage from './Components/CustomerPage/CustomerPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch('http://localhost:5000/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user); // Set the user if the token is valid
        } else {
          localStorage.removeItem('token'); // Remove invalid token
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  
  

  const handleLogin = (userData) => {
    setUser(userData.user);  
    localStorage.setItem('user', JSON.stringify(userData.user));
    localStorage.setItem('token', userData.token); // Store the token
    console.log(userData.token);
  };

  const handleSignup = (userData) => {
    setUser(userData.user);  
    localStorage.setItem('user', JSON.stringify(userData.user));
    localStorage.setItem('token', userData.token); // Store the token
    console.log(userData.token);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const ProtectedPharmacyRoute = ({ children }) => {
    return user && user.role === 'pharmacy' ? children : <Navigate to="/" />;
  };

  const ProtectedCustomerRoute = ({ children }) => {
    return user && user.role === 'customer' ? children : <Navigate to="/" />;
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner while verifying the token
  }


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup onLogin={handleSignup} />} />
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/pharmacy/*"
            element={
              <ProtectedPharmacyRoute>
                <PharmacyPage />
              </ProtectedPharmacyRoute>
            }
          />
          <Route
            path="/customer/*"
            element={
              <ProtectedCustomerRoute>
                <CustomerPage />
              // </ProtectedCustomerRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



