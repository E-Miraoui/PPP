import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import Project from '../ProjectComponent/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../Assets/background.jpg'; // Import the background image

function DDashboard() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem('token');
  useEffect(() => {
    async function fetchUserData() {
        try {
          const headers = {
            'Authorization': `${token}`, // Include the token in the request headers
            'Content-Type': 'application/json'
          };
    
          // Fetch user information
          const userInfoResponse = await fetch('http://localhost:8000/profile/info', { headers });
          const userData = await userInfoResponse.json();

          setUser(userData);
    
          // Fetch user's projects
          const projectsResponse = await fetch('http://localhost:8000/project/list', { headers });
          const projectsData = await projectsResponse.json();
          setProjects(projectsData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    
      if (token) {
        fetchUserData();
      }
    }, [token]); // Fetch data when the token changes

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {user && (
        <div className="row">
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
              <a href="#" style={{ width: '18rem', height: 'auto', border: '1px solid #93a7aa', borderRadius: '10px', justifyContent: 'center', textAlign: 'center', padding: '10px', margin: '20px', color: '#93a7aa', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }} className="add" >
                <div>
                  Add a new project +
                </div>
              </a>
              {
                projects.length > 0 ? (
                  projects.map((p) => {
                    return (<Project key={p.title} project={p} />)
                  })
                ) : (
                  <h1> </h1>
                )
              }
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default DDashboard;
