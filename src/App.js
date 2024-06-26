import React from 'react';
import DDashboard from './Components/Dashboard/DDashboard';
import ProjectView from './Components/ViewComponent/view'; 

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
            <Route exact path="/view-project" element={<ProjectView />}></Route> {/* Updated component name */}
            <Route exact path="/" element={<Welcome />}></Route>
            <Route exact path="/login" element={<LoginRegister />}></Route>
            <Route exact path="/data" element={<Formdata />}></Route>
            <Route exact path="/Education" element={<Education />}></Route>
            <Route exact path="/experience" element={<Experience />}></Route>
            <Route exact path="/dashboard" element={<DDashboard />}></Route>
            <Route exact path="/create-project" element={<ProjectCreation />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
