import React from 'react';
import './AirtimeToCashPage.css';

const AirtimeToCashPage = () => {
  return (
    <div className="airtime-to-cash-container">
      <div className="sidebaraitime">
        <div className="logo"><img src="/images/logosub.jpg" alt="logo" /></div>
        <ul className="menu">
          <li className="menu-item">
            <span className="icon">📊</span> Dashboard
          </li>
          <li className="menu-item">
            <span className="icon">📞</span> Buy Airtime
          </li>
          <li className="menu-item">
            <span className="icon">📡</span> Buy Data
          </li>
          <li className="menu-item">
            <span className="icon">📺</span> TV Subscription
          </li>
          <li className="menu-item">
            <span className="icon">⚡</span> Pay Electric Bill
          </li>
          <li className="menu-item active">
            <span className="icon">↔️</span> Airtime to Cash
          </li>
          <li className="menu-item">
            <span className="icon">📑</span> Transaction History
          </li>
          <li className="menu-item">
            <span className="icon">🎧</span> Help & Support
          </li>
        </ul>
        <div className="logout">Log Out</div>
      </div>
      <div className="main-content">
        <div className="navbar">
          <h2>Airtime to Cash</h2>
          <div className="navbar-actions">
            <button className="upgrade-button">Upgrade To Merchant</button>
            <div className="profile-icon">👤</div>
          </div>
        </div>
        <div className="content">
          <div className="form-container">
            <h3>Airtime to Cash</h3>
            <form className="airtime-form">
              <div className="form-group">
                <label>Select Network</label>
                <select>
                  <option>Etisalat</option>
                  <option>MTN</option>
                  <option>Airtel</option>
                  <option>Glo</option>
                </select>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="08094562627" />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input type="text" placeholder="₦5,000" />
              </div>
              <div className="form-group">
                <label>Airtime Share Pin</label>
                <input type="password" placeholder="*******" />
              </div>
              <button type="submit" className="proceed-button">Proceed</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirtimeToCashPage;
