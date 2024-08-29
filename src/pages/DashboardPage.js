// src/pages/DashboardPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import './DashboardPage.css'

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="content">
        <h1>Welcome, Lawal Wahab</h1>
        <div className="wallet-info">
          <p>Wallet Balance: ₦3000</p>
          <button>Fund Wallet</button>
          {/* Other sections like referral, cards, etc. */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
