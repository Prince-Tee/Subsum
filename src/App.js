// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AirtimeToCashPage from './pages/AirtimeToCashPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/airtime-to-cash" element={<AirtimeToCashPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
