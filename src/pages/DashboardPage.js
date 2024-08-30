import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebardash">
        <div className="logo">subssum</div>
        <ul className="menu">
          <li className="menu-item active">
            <span className="icon">📊</span> Dashboard
          </li>
          <li className="menu-item"><span className="icon">📞</span> Buy Airtime</li>
          <li className="menu-item"><span className="icon">📡</span> Buy Data</li>
          <li className="menu-item"><span className="icon">📺</span> TV Subscription</li>
          <li className="menu-item"><span className="icon">⚡</span> Pay Electric Bill</li>
          <li className="menu-item"><span className="icon">💵</span> Airtime to Cash</li>
          <li className="menu-item"><span className="icon">📑</span> Transaction History</li>
          <li className="menu-item"><span className="icon">🎧</span> Help & Support</li>
        </ul>
        <div className="logout">Log Out</div>
      </div>
      <div className="main-contentdash">
        <div className="navbar">
          <h2>Welcome, Lawal Wahab</h2>
          <button className="upgrade-button">Upgrade To Merchant</button>
          <div className="profile-icon">👤</div>
        </div>
        <div className="content">
          <div className="wallet">
            <div className="wallet-balance">
              <p>Wallet Balance</p>
              <h1>₦3000</h1>
              <button className="fund-wallet">Fund Wallet</button>
            </div>
            <div className="no-cards">
            <img src="/images/img1.jpg" alt="Background" className="background-image" />
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
      </div>
    </div>
  );
};

export default DashboardPage;
