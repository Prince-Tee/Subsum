import React from 'react';
import './HelpAndSupport.css'; // Import your CSS file

const HelpAndSupport = () => {
  return (
    <div className="help-and-support-container">
      <div className="sidebar">
        <div className="logo"><img src="/images/logosub.jpg" alt="logo" /></div>
        <ul>
          <li>Dashboard</li>
          <li>Buy Airtime</li>
          <li>Buy Data</li>
          <li>TV Subscription</li>
          <li>Pay Electric Bill</li>
          <li>Airtime to Cash</li>
          <li>Transaction History</li>
          <li className="active">Help & Support</li>
        </ul>
        <button className="log-out-button">Log Out</button>
      </div>
      <div className="main-content">
        <h2>Help And Support</h2>
        <div className="support-options">
          <div className="support-option">
            <i className="fas fa-question-circle"></i>
            <h3>Frequently Asked Questions</h3>
            <p>See FAQ</p>
          </div>
          <div className="support-option">
            <i className="fas fa-comments"></i>
            <h3>Live Chat</h3>
            <p>Chat Now</p>
          </div>
          <div className="support-option">
            <i className="fab fa-whatsapp"></i>
            <h3>Whatsapp</h3>
            <p>Drop a Message →</p>
          </div>
          <div className="support-option">
            <i className="fas fa-phone"></i>
            <h3>Phone Call</h3>
            <p>Call Us →</p>
          </div>
          <div className="support-option">
            <i className="fas fa-exclamation-circle"></i>
            <h3>Report Our Support</h3>
            <p>Not Satisfied? →</p>
          </div>
          <div className="support-option">
            <i className="fas fa-star"></i>
            <h3>Review Our App</h3>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;