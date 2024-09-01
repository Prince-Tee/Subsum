import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="sidebar1">
        <div className='whiteback'>
          <div className="logo"><Link to="/"><img src="/images/logosub.jpg" alt="logo" /> </Link></div>
          <ul className="menu">
            <li className="menu-item active"> <span className="icon">📊</span> <Link to="/dashboard">Dashboard  ▼</Link></li>
            <li className="menu-item"><span className="icon">📞</span><Link to="/airtime-to-cash">Buy Airtime ▼</Link></li>
            <li className="menu-item"> <span className="icon">📡</span>Buy Data ▼</li>
            <li className="menu-item"> <span className="icon">📺</span>TV Subscription ▼</li>
            <li className="menu-item"> <span className="icon">⚡</span>Pay Electric Bill ▼</li>
            <li className="menu-item"> <span className="icon">📑</span><Link to="/transactionhistory">Transaction History ▼</Link></li>
            <li className="menu-item"><span className="icon">🎧</span><Link to="/help-and-support">Help & Support ▼</Link></li>
          </ul>
          </div>
        <div className="footer"> <h3>The BEST place to subscribe / buy </h3></div>

      </div>

      <div className="main-content">
        <div className="navbar1">
          <button className="home-button">&lt; Home</button>
          <button className="signup-button2">Sign Up</button>
        </div>
        
          <h1>Login</h1> 
          <button className="google-login"><h2> <img src="/images/google.jpg" alt="logo" /> Login with Google </h2></button>

          <div className="separator">or continue with</div> 
          <div className="login-form">
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
            <label class="toggle-label">
            <input type="checkbox" class="toggle-checkbox"/>
            <span class="toggle-switch"></span>
            <span class="toggle-text">Remember Me</span>
        </label>
              
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
