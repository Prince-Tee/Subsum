import React from 'react';
import './UserProfile.css';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <div className="sidebaruser">
      <div className="logo"><Link to="/"><img src="/images/logosub.jpg" alt="logo" /></Link></div>
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
      <div className="main-content">
        <div className="header">
          <h2>Welcome, Lawal Wahab</h2>
          <div className="header-actions">
            <p className="upgrade-buttonuser">Upgrade To Merchant</p>
            <div className="alarm-icon">🔔</div>
            <div className="profile-icon">
              <Link to="/userprofile">👤</Link>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="profile-section">
            <div className="profile-image">
              <label htmlFor="profile-image-input">
                <img src="/images/upload.png" alt="logo" />
                <span> <span className="icon">📺</span>Upload Image</span>
              </label>
              <input type="file" id="profile-image-input" />
            </div>
            <div className="profile-details">
              <p><strong>Name:</strong> Lawal Wahab Babatunde</p>
              <p><strong>Email:</strong> wabdotmail@gmail.com</p>
              <p><strong>Phone Number:</strong> 0906 856 2849</p>
              <p><strong>Account Status:</strong> Active</p>
              <p><strong>Referral Link:</strong> www.subsum.com/tre/wd...</p>
              <button>Edit Details</button>
            </div>
          </div>
          <div className="change-password-section">
            <h3>Change Password</h3>
            <form>
              <label htmlFor="current-password">Current Password</label>
              <input type="password" id="current-password" />
              <label htmlFor="new-password">New Password</label>
              <input type="password" id="new-password" />
              <label htmlFor="confirm-password">Confirm New Password</label>
              <input type="password" id="confirm-password" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
