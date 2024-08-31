// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AirtimeToCashPage from './pages/AirtimeToCashPage';
import HelpAndSupport from './pages/HelpAndSupport';
import UserProfile from './pages/UserProfile';
import TransactionHistory from './pages/TransactionHistory';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/airtime-to-cash" element={<AirtimeToCashPage />} />
        <Route path="/help-and-support" element={<HelpAndSupport />} />
        <Route path="/transactionhistory" element={<TransactionHistory />} />
        <Route path="/userprofile" element={<UserProfile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
