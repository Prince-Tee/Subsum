import React from 'react';
import { Link } from 'react-router-dom';
import './HelpAndSupport.css'; // Make sure to create and import your CSS file

const HelpAndSupport = () => {
  return (
    <div className="help-and-support-container">
      {/* Sidebar */}
      <div className="sidebarhs">
        <div className="logo">
          <img src="/images/logosub.jpg" alt="logo" />
        </div>
        <ul>
          <li className="menu-item"><span className="icon">📊</span> Dashboard</li>
          <li className="menu-item"><span className="icon">📞</span> Buy Airtime ▼</li>
          <li className="menu-item"><span className="icon">📡</span> Buy Data ▼</li>
          <li className="menu-item"><span className="icon">📺</span> TV Subscription ▼</li>
          <li className="menu-item"><span className="icon">⚡</span> Pay Electric Bill ▼</li>
          <li className="menu-item"><span className="icon">💵</span> Airtime to Cash</li>
          <li className="menu-item"><span className="icon">📑</span> Transaction History</li>
          <li className="menu-item active"><span className="icon">🎧</span> Help & Support</li>
        </ul>
        <div className="logout">Log Out ▼</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <h2>Help And Support</h2>
          <div className="navbar-rightt">
            
          <p className="upgrade-buttonn"> Upgrade To Merchant</p>
          <div className="alarm-icon">🔔</div>
          <div className="profile-icon">
            <Link to="/userprofile">👤</Link>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="support-options">
          <div className="support-option faq">
          <img src="/images/freq.jpg" alt="logo" />
            <h3>Frequently Asked Questions</h3>
            <p>See FAQ →</p>
          </div>
          <div className="support-option live-chat">
          <img src="/images/live.png" alt="logo" />
            <h3>Live Chat</h3>
            <p>Chat Now →</p>
          </div>
          <div className="support-option whatsapp">
          <img src="/images/whats.png" alt="logo" />
            <h3>Whatsapp</h3>
            <p>Drop a Message →</p>
          </div>
          <div className="support-option phone-call">
          <img src="/images/call.png" alt="logo" />
            <h3>Phone Call</h3>
            <p>Call Us →</p>
          </div>
          <div className="support-option report-support">
          <img src="/images/reports.png" alt="logo" />
            <h3>Report Our Support</h3>
            <p>Not Satisfied? →</p>
          </div>
          <div className="support-option review-app">
          <img src="/images/rev.png" alt="logo" />
            <h3>Review Our App</h3>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
