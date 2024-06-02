import React, { useState, useEffect } from 'react';
import './view.css';

const ProjectView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const projectId = localStorage.getItem('projectId');
    const token = localStorage.getItem('token');

    if (!projectId) {
      setError('Project ID not found in localStorage.');
      setLoading(false);
      return;
    }

    if (!token) {
      setError('Token not found in localStorage.');
      setLoading(false);
      return;
    }

    fetch(`http://localhost:8000/project/snapshot/${projectId}`, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  const {
    firstName, lastName, profileTitle, aboutMe, email, phoneNumber,
    address, city, postalCode, Education = [], ProfessionalExp = [],
    Language = [], Skill = [], Interest = []
  } = data;

  return (
    <div className='wrapper-view'>
      <div classname='form-box login'>
      
      <div style={{textAlign: 'center', marginLeft:'95px'}}><h1>{firstName} {lastName}</h1> </div>
      <p>{profileTitle}</p>
      <p>{aboutMe}</p>
      <div style={{marginLeft:'25px', color:'#008631'}}>
      <p> <b>Contact Information: </b></p></div>
      <ul >
    
        <li className=''> <placeholder><b> Email: </b></placeholder> {email}</li>
        <li className=''>  <placeholder> <b> Phone Number: </b></placeholder>  {phoneNumber}</li>
        <li className=''> <placeholder> <b> City: </b> </placeholder> {address}, {city}, {postalCode}</li>
      </ul>
      <div style={{marginLeft:'25px',color:'#008631'}}>
      <p  className=''><b> Education: </b></p></div>
      <ul >
        {Education.map(edu => (
          <li className=''  key={edu.institutionName}>
            <p>{edu.institutionName}</p>
            <p>{edu.degree}</p>
           
          
          </li>
        ))}
      </ul>
      <div style={{marginLeft:'25px',color:'#008631'}}>
      <p> <b> Professional Experience: </b></p> </div>
      <ul className=''>
        {ProfessionalExp.map(exp => (
          <li className=''  key={exp.companyName}>
            <p>{exp.companyName}</p>
            <p>{exp.city}</p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
     
    
  
    </div>

    </div>
  );
};

export default ProjectView;
