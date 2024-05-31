import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SDashboard from './Components/Dashboard/StaticDashboard';
import DDashboard from './Components/Dashboard/DDashboard';
import ProjectCreation from './Components/ProjectCreation/projectcreation'; 

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Navbar from './Components/navbar/navbar';


import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Welcome from './Components/WelcomePage/Welcome';
import Formdata from './Components/Form/form';
import Education from './Components/Form/Education';
import Experience from './Components/Form/experience';
function App() {
  return (
    <div>
      
      
      <div>
        <Navbar />
      </div>

      <div>
      <BrowserRouter>
      <Routes> 
      <Route exact path="/" element={<Welcome/>}></Route>
      <Route exact path="/login" element={<LoginRegister/>}></Route>
      <Route exact path="/data" element={<Formdata/>}></Route>
      <Route exact path="/Education" element={<Education/>}></Route>
      <Route exact path="/experience" element={<Experience/>}></Route>



      </Routes>
      </BrowserRouter>
                  
      </div>


    </div>
  );
}


export default App;
