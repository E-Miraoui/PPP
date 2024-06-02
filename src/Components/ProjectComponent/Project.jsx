import React, { useEffect, useState } from 'react';
import './Project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import cv from '../Assets/cvTemp.png';

function Project({ project }) {
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  /*useEffect(() => {
    async function fetchThumbnail() {
      try {
        const headers = {
          'Authorization': `${token}`
        };

        const response = await fetch(`http://localhost:8000/project/thumb/${project.id}`, { headers });
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setThumbnailUrl(url);
        } else {
          console.error('Failed to fetch thumbnail');
        }
      } catch (error) {
        console.error('Error fetching thumbnail:', error);
      }
    }

    fetchThumbnail();
  }, [project.id, token]);*/

  const handleView = () => {
    localStorage.setItem('projectId', project.id);
    navigate(`/view-project`);
  };

  const handleEdit = () => {
    navigate(`/project/edit/${project.id}`);
  };

  return (
    <div className="ProjectCard">
      <img src={cv} className="Preview card-img-top" alt="Preview" style={{ margin: 'auto' }} />
      <div className="card-body">
        <h3 style={{ textAlign: 'center' }} className="card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button 
            style={{ 
              backgroundColor: '#a7b5b9', color: '#fff', width: '48%', height: 'fit-content', textAlign: 'center', 
              display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: 0, 
              cursor: 'pointer', border: '1px solid #a7b5b9', borderRadius: '10px', fontSize: '1.2em', 
              transition: 'background-color 0.3s' 
            }} 
            onMouseOver={(e) => e.target.style.backgroundColor = '#dbd3d8'} 
            onMouseOut={(e) => e.target.style.backgroundColor = '#a7b5b9'}
            onClick={handleView}
          >
            View
          </button>
          <button 
            style={{ 
              backgroundColor: '#a7b5b9', color: '#fff', width: '48%', height: 'fit-content', textAlign: 'center', 
              display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: 0, 
              cursor: 'pointer', border: '1px solid #a7b5b9', borderRadius: '10px', fontSize: '1.2em', 
              transition: 'background-color 0.3s' 
            }} 
            onMouseOver={(e) => e.target.style.backgroundColor = '#dbd3d8'} 
            onMouseOut={(e) => e.target.style.backgroundColor = '#a7b5b9'}
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
