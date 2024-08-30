// src/pages/LoginPage.js
import React from 'react';
import './LoginPage.css'

const LoginPage = () => {
  return (
    
    <div className="login-container">
      <div className="login-header">
      
      <a href="https://www.google.com">Sign Up</a>
        <a href="https://www.google.com">Home</a>
      </div>
      <div className="sidebar">
        <div className="logo">subsum</div>
        <ul>
          <li>Dashboard</li>
          <li>Buy Airtime</li>
          <li>Buy Data</li>
          <li>TV Subscription</li>
          <li>Pay Electric Bill</li>
          <li>Transaction History</li>
          <li>Help & Support</li>
        </ul>
        <p>The BEST place to subscribe / buy</p>
      </div>
      <div className="main-content">
        <h2>Login</h2>
        <div className="login-options">
          <button className="google-login">
            <img src="path/to/google-logo.png" alt="Google Logo" />
            Login with Google
          </button>
          <p>Or continue with</p>
        </div>
        <form>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="wabdotmail@gmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Gabon4351" />
          <div className="remember-password">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
            <a href="www.g.com">Recover Password</a>
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
