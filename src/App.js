import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import SDashboard from './Components/Dashboard/StaticDashboard';
import DDashboard from './Components/Dashboard/DDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import LoginRegister from './Components/LoginRegister/LoginRegister';

function App() {
  return (
    <Router>
    <Routes> {/* Wrap your Route components with Routes */}
      {/* Route for login page */}
      <Route path="/login" element={<LoginRegister />} />
      {/* Route for dashboard page */}
      <Route path="/dashboard" element={<SDashboard />} />
      {/* Default route, redirects to login page */}
      <Route path="/" element={<LoginRegister />} />
    </Routes>
  </Router>
  );
}

export default App;
