import React, { useState, useEffect } from 'react';
import './projectcreation.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function ProjectCreation() {
  const [title, setTitle] = useState('');
  const [templateName, setTemplate] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState({});

  const templates = ['Obsidian', 'Marine', 'Crystal', 'Bear']; // Add your template names here
  const navigate = useNavigate(); // Use useHistory hook for navigation
  const token = localStorage.getItem('token');

 /* useEffect(() => {
    // Function to fetch images for each template
    const fetchImages = async () => {
      const newImages = {};
      for (let template of templates) {
        try {
          const response = await fetch(`http://localhost:8000/template/thumb/${template}`);
          if (response.ok) {
            const imageBlob = await response.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            newImages[template] = imageObjectURL;
          } else {
            console.error(`Failed to fetch image for ${template}`);
          }
        } catch (error) {
          console.error(`Error fetching image for ${template}:`, error);
        }
      }
      setImages(newImages);
    };

    fetchImages();
  }, [templates]);*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(token);
    try {
      const headers = {
        'Authorization': token, // Include the token in the request headers
        'Content-Type': 'application/json'
      };
      const response = await fetch('http://localhost:8000/project/new', {
        method: 'POST',
        headers,
        body: JSON.stringify({ title, templateName })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'project not created');
      }

      setError('');
      navigate("/dashboard");
    } catch (error) {
      setError(error.message || 'project not created');
    }
  };

  const handleGoBack = () => {
    navigate('/dashboard'); // Redirect to the Dashboard page
  };

  return (
    <div className="container">
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
                id="templateName" 
                value={templateName} 
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
      <div className="image-box">
        <h2>Template Images</h2>
        <div>
          {Object.entries(images).map(([name, imageUrl]) => (
            <div key={name} style={{ marginBottom: '10px' }}>
              <h3>{name}</h3>
              <img src={imageUrl} alt={`${name} template`} style={{ maxWidth: '100px' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCreation;
