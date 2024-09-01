import React from 'react';
import './TransactionHistory.css'; 
import { Link } from 'react-router-dom';

const TransactionHistory = () => {
  return (
    <div className="transaction-history-container">
      <div className="sidebardash">
        <div className="logo"><Link to="/"><img src="/images/logosub.jpg" alt="logo" /></Link></div>
        <ul className="menu">
          <li className="menu-item">
            <span className="icon">📊</span><Link to="/dashboard"> Dashboard</Link>
          </li>
          <li className="menu-item"><span className="icon">📞</span><Link to="/airtime-to-cash"> Buy Airtime ▼ </Link></li>
          <li className="menu-item"><span className="icon">📡</span> Buy Data ▼</li>
          <li className="menu-item"><span className="icon">📺</span> TV Subscription ▼</li>
          <li className="menu-item"><span className="icon">⚡</span> Pay Electric Bill ▼</li>
          <li className="menu-item"><span className="icon">💵</span> <Link to="/airtime-to-cash"> Airtime to Cash </Link></li>
          <li className="menu-item" active><span className="icon">📑</span><Link to="/transactionhistory"> Transaction History</Link></li>
          <li className="menu-item"><span className="icon">🎧</span> <Link to="/help-and-support"> Help & Support</Link></li>
        </ul>
        <div className="logout">Log Out ▼</div>
      </div>
      <div className="transaction-main-content">
        <div className="transaction-header">
          <h2>Transaction History</h2>
          <div className="transaction-nav-icons">
            <p className="upgrade-buttonuser">Upgrade To Merchant</p>
            <div className="alarm-icon">🔔</div>
            <div className="profile-icon">
              <Link to="/userprofile">👤</Link>
            </div>
          </div>
        </div>
        <div className="transaction-filter-section">
          <input type="text" placeholder="Filter" className="transaction-filter-input"/>
          <button className="transaction-filter-button">Filter</button>
        </div>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Amount</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Transaction No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>
            
            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>

            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td><button className="transaction-action-button">Open</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
