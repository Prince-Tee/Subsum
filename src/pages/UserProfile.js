import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
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
          <li>Help & Support</li>
        </ul>
        <button className="log-out-button">Log Out</button>
      </div>
      <div className="main-content">
        <h2>Welcome, Lawal Wahab</h2>
        <div className="profile-info">
          <div className="profile-image">
            <label htmlFor="profile-image-input">Upload Image</label>
            <input type="file" id="profile-image-input" />
          </div>
          <div className="profile-details">
            <p>Name: Lawal Wahab Babatunde</p>
            <p>Email: wabdotmail@gmail.com</p>
            <p>Phone Number: 0906 856 2849</p>
            <p>Account Status: Active</p>
            <p>Referral Link: www.subsum.com/tre/wd...</p>
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
  );
};

export default UserProfile;