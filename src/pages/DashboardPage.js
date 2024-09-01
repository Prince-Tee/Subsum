import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebardash">
        <div className="logo"> <Link to="/"><img src="/images/logosub.jpg" alt="logo" /></Link></div>
        <ul className="menu">
          <li className="menu-item active">
            <span className="icon">📊</span> <Link to="/dashboard"> Dashboard </Link>
          </li>
          <li className="menu-item"><span className="icon">📞</span> <Link to="/airtime-to-cash">Buy Airtime ▼ </Link> </li>
          <li className="menu-item"><span className="icon">📡</span> Buy Data ▼</li>
          <li className="menu-item"><span className="icon">📺</span> TV Subscription ▼</li>
          <li className="menu-item"><span className="icon">⚡</span> Pay Electric Bill ▼</li>
          <li className="menu-item"><span className="icon">💵</span> <Link to="/airtime-to-cash">Airtime to Cash </Link> </li>
          <li className="menu-item"><span className="icon">📑</span> <Link to="/transactionhistory">Transaction History </Link></li>
          <li className="menu-item"><span className="icon">🎧</span> <Link to="/help-and-support">Help & Support </Link></li>
        </ul>
        <div className="logout">Log Out ▼</div>
      </div>
      <div className="main-contentdash">
        <div className="navbar">
        <div class="navbar-right">
          <h2>Welcome, Lawal Wahab</h2>
          
          <p className="upgrade-buttonn"> Upgrade To Merchant</p>
          <div className="alarm-icon">🔔</div>
          <div className="profile-icon">
            <Link to="/userprofile">👤</Link>
          
            </div>
          </div>
        </div>

        <div className="content">
          <div className='content2'>
          <div className="wallet">
            <div className="wallet-balance">
              <p>Wallet Balance</p>
              <h1>₦3000</h1>
              <button className="fund-wallet">Fund Wallet</button>
            </div>
            
          </div>
          <div className="referral">
            <p>Referral</p>
            <p>Referral Code: <strong>18/52ha089</strong></p>
            <div className="referral-actions">
              <button className="referral-btn">Copy</button>
              <button className="referral-btn">Edit</button>
              <button className="referral-btn">Share</button>
            </div>
          </div>
          <div className="referral-stats">
            <p>Total referrals made: <strong>0</strong></p>
            <p>Current wallet Bonus: <strong>₦0.00</strong></p>
            <button className="cashout-btn">Cashout</button>
          </div>
          </div>
          <img src="/images/img1.jpg" alt="Background" className="background-image" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
