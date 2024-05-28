import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import Project from '../ProjectComponent/Project';
import cv from '../Assets/cvTemp.png';
import backgroundImage from '../Assets/background.jpg'; // Import the background image

function SDashboard() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Simulated user data
    const sampleUser = {
      firstName: 'Imtiez',
      lastName: 'Mrad',
      email: 'mradimtiez@gmail.com',
      photo: null, // No photo for now
    };

    // Simulated project data
    const sampleProjects = [
      { id: 1, title: 'Project 1', description: 'Description for Project 1', imgURL: cv },
      { id: 2, title: 'Project 2', description: 'Description for Project 2', imgURL: cv },
      { id: 3, title: 'Project 3', description: 'Description for Project 3', imgURL: cv },
      { id: 4, title: 'Project 4', description: 'Description for Project 4', imgURL: cv },
      { id: 5, title: 'Project 5', description: 'Description for Project 5', imgURL: cv },
      { id: 6, title: 'Project 6', description: 'Description for Project 6', imgURL: cv },
      { id: 7, title: 'Project 7', description: 'Description for Project 7', imgURL: cv },
      { id: 8, title: 'Project 8', description: 'Description for Project 8', imgURL: cv },
    ];

    setUser(sampleUser);
    setProjects(sampleProjects);
  }, []); // Empty dependency array since this effect runs only once

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: '#e9edf0' }}>
      {user && (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <aside style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '22rem',
            backgroundColor: '#2E5e4e',
            padding: '20px',
            color: '#fff',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ marginTop: '10%' }}>
                <h1>{user.firstName} {user.lastName}</h1>
                <p>{user.email}</p>
              </div>
            </div>
            <ul style={{ marginBottom: '20px', listStyle: 'none', padding: 0 }}>
  <li style={{ marginBottom: '15px' }}>
    <button style={{ backgroundColor: '#a7b5b9', color: '#fff', width: '100%', height: 'fit-content', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '10px', margin: 0 , cursor: 'pointer', border: '1px solid #a7b5b9', borderRadius: '10px',fontSize: '1.2em',transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#dbd3d8'} onMouseOut={(e) => e.target.style.backgroundColor = '#a7b5b9'}>Help</button>
  </li>
  <li style={{ marginBottom: '15px' }}>
    <button style={{ backgroundColor: '#a7b5b9', color: '#fff', width: '100%', height: 'fit-content', textAlign: 'center', display: 'flex', padding: '10px', margin: 0, cursor: 'pointer', justifyContent: 'center', alignItems: 'center',border: '1px solid #a7b5b9', borderRadius: '10px',fontSize: '1.2em',transition: 'background-color 0.3s'}} onMouseOver={(e) => e.target.style.backgroundColor = '#dbd3d8'} onMouseOut={(e) => e.target.style.backgroundColor = '#a7b5b9'}>Settings</button>
  </li>
  <li>
    <button style={{ backgroundColor: '#a7b5b9', color: '#fff', width: '100%', height: 'fit-content', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '10px', margin: 0, cursor: 'pointer', border: '1px solid #a7b5b9', borderRadius: '10px',fontSize: '1.2em',transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#dbd3d8'} onMouseOut={(e) => e.target.style.backgroundColor = '#a7b5b9'}>Log out</button>
  </li>
</ul>

          </aside>
          <main style={{ marginLeft: '25rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', overflowY: 'scroll' }}>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '0 auto' }}>
              <a href="#" style={{ width: '18rem', height: 'auto', border: '1px solid #93a7aa', borderRadius: '10px', justifyContent: 'center', textAlign: 'center', padding: '10px', margin: '20px', color: '#93a7aa', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
                <div>
                  Add a new project +
                </div>
              </a>
              {projects.length > 0 ? (
                projects.map((p) => {
                  return (<Project key={p.title} project={p} />)
                })
              ) : (
                <h1>There are no projects</h1>
              )}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default SDashboard;
