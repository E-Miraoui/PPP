import React, { useState } from 'react';
import './projectcreation.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';


function ProjectCreation() {
  const [title, setTitle] = useState('');
  const [template, setTemplate] = useState('');
  const templates = ['Template 1', 'Template 2', 'Template 3']; // Add your template names here
  const navigate = useNavigate(); // Use useHistory hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Created:', { title, template });
  };
  const handleGoBack = () => {
    navigate('/dashboard'); // Redirect to the Dashboard page
  };

  return (
    <div className="wrapper">
      <div className="form-box">
        <h1>Create New Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="text" 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Project Title"
              required 
            />
            <span className="icon"><i className="fa fa-pencil-alt"></i></span>
          </div>
          <div className="input-box">
            <select 
              id="template" 
              value={template} 
              onChange={(e) => setTemplate(e.target.value)} 
              required 
              className="form-control"
            >
              <option value="">Select a template name</option>
              {templates.map((temp, index) => (
                <option key={index} value={temp}>{temp}</option>
              ))}
            </select>
            <span className="icon"><i className="fa fa-file-alt"></i></span>
          </div>
          <button type="submit">Create Project</button>
        </form>
        <button onClick={handleGoBack} className="btn btn-secondary go-back">Go Back</button>
      </div>
    </div>
  );
}

export default ProjectCreation;
