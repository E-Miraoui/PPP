import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SDashboard from './Components/Dashboard/StaticDashboard';
import DDashboard from './Components/Dashboard/DDashboard';
import ProjectCreation from './Components/ProjectCreation/projectcreation'; 

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import LoginRegister from './Components/LoginRegister/LoginRegister';

function App() {
  return (
    <Router>
    <Routes> 
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/dashboard" element={<DDashboard />} />
      <Route path="/create-project" element={<ProjectCreation />} />
      <Route path="/" element={<LoginRegister />} />
    </Routes>
  </Router>
  );
}

export default App;
