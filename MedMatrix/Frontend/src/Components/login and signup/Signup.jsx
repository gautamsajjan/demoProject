import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';

const Signup = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
    registrationCode: '',
    pharmacyName: '',
    pharmacyAddress: '',
    address: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      console.log(result); // Check the structure of the response
      if (response.ok) {
        localStorage.setItem('token', result.token);
        if (result.user) {
          onLogin(result);
          if (result.user.role == 'pharmacy') {
            navigate('/pharmacy');
          } else if (result.user.role == 'customer') {
            navigate('/customer');
          }
        } else {
          setError('User data not found in the response.');
        }
      } else {
        setError(result.message || 'Signup failed!');
      }
    } catch (err) {
      setError('Server error, please try again later.');
    }
  };

  return (
    <div>
      <SignupForm
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        error={error}
      />
    </div>
  );
};

export default Signup;
