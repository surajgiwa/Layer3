import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './signin.css';

const Signin = () => {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupAdminCode, setSignupAdminCode] = useState(''); // New state for admin code
  const [message, setMessage] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
        email: loginEmail,
        password: loginPassword,
      });
  
      console.log('Login response:', response);
  
      if (response.data && response.data.token && response.data.user) {
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setMessage('Login successful!');
  
        if (user.isAdmin) {
          navigate('/admindashboard');
        } else {
          navigate('/userdashboard');
        }
      } else {
        setMessage('Login failed: Invalid response from server.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in: ' + (error.response?.data?.message || 'Unexpected error occurred.'));
    }
  };  

  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        adminCode: signupAdminCode // Include admin code if provided
      });
      setMessage('Signup successful! Please login.');
    } catch (error) {
      setMessage('Error signing up: ' + (error.response?.data?.message || 'Unexpected error occurred.'));
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/forgot-password`, {
        email: loginEmail,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error requesting password reset:', error);
      setMessage('Error requesting password reset: ' + (error.response?.data?.message || 'Unexpected error occurred.'));
    }
  };

  return (
    <div className="container">
      <input type="checkbox" id="toggle" />
      <div className="signin">
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <div className="password-input">
            <input
              type={showLoginPassword ? 'text' : 'password'}
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
            >
              {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <input type="submit" value="Login" />
          <small onClick={handleForgotPassword} className="forgot-password">Forgot Password?</small>
          <small>Don't have an account? <label htmlFor="toggle">Sign Up</label></small>
        </form>
        {message && <p className="message">{message}</p>}
      </div>

      <div className="signup">
        <h1>Create an account</h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Company Name"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Company Email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <div className="password-input">
            <input
              type={showSignupPassword ? 'text' : 'password'}
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowSignupPassword(!showSignupPassword)}
            >
              {showSignupPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="password-input">
            <input
              type={showSignupConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowSignupConfirmPassword(!showSignupConfirmPassword)}
            >
              {showSignupConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <input
            type="text"
            placeholder="Admin Code (optional)"
            value={signupAdminCode}
            onChange={(e) => setSignupAdminCode(e.target.value)}
          />
          <input type="submit" value="Sign Up" />
          <small>Already have an account? <label htmlFor="toggle">Sign In</label></small>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Signin;
