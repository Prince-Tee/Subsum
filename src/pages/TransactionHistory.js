import React from 'react';
import './TransactionHistory.css'; // Import your CSS file

const TransactionHistory = () => {
  return (
    <div className="transaction-history-container">
      <div className="sidebar">
        <div className="logo">subssum</div>
        <ul>
          <li>Dashboard</li>
          <li>Buy Airtime</li>
          <li>Buy Data</li>
          <li>TV Subscription</li>
          <li>Pay Electric Bill</li>
          <li>Airtime to Cash</li>
          <li>Transaction History</li>
          <li>Help & Support</li>
        </ul>
        <button className="log-out-button">Log Out</button>
      </div>
      <div className="main-content">
        <h2>Transaction History</h2>
        <div className="filter-section">
          <input type="text" placeholder="Filter" />
          <button>Filter</button>
        </div>
        <table>
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
            {/* Add rows for your transaction data here */}
            <tr>
              <td>Mtn Airtime VTU</td>
              <td>N100.00</td>
              <td>N100.00</td>
              <td>Initiated</td>
              <td>Transfer</td>
              <td>17045621860850336938179613</td>
              <td>Open</td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;