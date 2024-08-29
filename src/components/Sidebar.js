// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Subsum</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/buy-airtime">Buy Airtime</Link></li>
          <li><Link to="/buy-data">Buy Data</Link></li>
          <li><Link to="/tv-subscription">TV Subscription</Link></li>
          <li><Link to="/pay-electric-bill">Pay Electric Bill</Link></li>
          <li><Link to="/airtime-to-cash">Airtime to Cash</Link></li>
          <li><Link to="/transaction-history">Transaction History</Link></li>
          <li><Link to="/help-support">Help & Support</Link></li>
          <li><Link to="/logout">Log Out</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
