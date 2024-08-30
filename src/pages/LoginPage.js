import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">subsum</div>
        <ul className="menu">
          <li className="menu-item active" ><Link to="/dashboard">Dashboard</Link></li> 
          <li className="menu-item"><Link to="/airtime-to-cash">Buy Airtime</Link></li>
          <li className="menu-item">Buy Data</li>
          <li className="menu-item">TV Subscription</li>
          <li className="menu-item">Pay Electric Bill</li>
          <li className="menu-item"><Link to="/transactionhistory">Transaction History</Link></li>
          <li className="menu-item"><Link to="/help-and-support">Help & Support</Link></li>
        </ul>
        <div className="footer">The BEST place to subscribe / buy</div>
      </div>
      <div className="main-content">
        <div className="navbar">
          <button className="home-button">&lt; Home</button>
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <button className="google-login">Login with Google</button>
          <div className="separator">or continue with</div>
          <form>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="webdtmail@gmail.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Gaboon4351" />
            </div>
            <div className="form-group">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <a href="www.g.com" className="recover-password">Recover Password</a>
            </div>
            <button className="login-button">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
