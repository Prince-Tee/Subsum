// src/pages/AirtimeToCashPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import './AirtimeToCashPage.css';

const AirtimeToCashPage = () => {
  return (
    <div className="airtime-to-cash-page">
      <Sidebar />
      <div className="content">
        <h2>Airtime to Cash</h2>
        <form>
          <div>
            <label>Select Network</label>
            <select>
              <option>Etisalat</option>
              <option>MTN</option>
              <option>Glo</option>
              <option>Airtel</option>
            </select>
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>
          <div>
            <label>Amount</label>
            <input type="text" placeholder="Enter amount" />
          </div>
          <div>
            <label>Airtime Share Pin</label>
            <input type="text" placeholder="Enter airtime share pin" />
          </div>
          <button type="submit">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default AirtimeToCashPage;
