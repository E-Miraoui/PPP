import React, { useState } from "react";
import { FaCity, FaCalendarAlt } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import './experience.css';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const [experienceData, setExperienceData] = useState({
    city: '',
    description: '',
    companyName: '',
    finishYear: '',
    finishMonth: '',
    position: '',
    startMonth: '',
    startYear: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceData({
      ...experienceData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectId = localStorage.getItem('projectId');
    const formData = JSON.parse(localStorage.getItem('formData'));
    const educationData = JSON.parse(localStorage.getItem('educationData'));
  
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      };
      const response = await fetch('http://localhost:8000/project/info', {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          projectId,
          Snapshot: {
            ...formData,
            Education: [
              {
                ...educationData,
                tag: 0 // Include the tag field for Education
              }
            ],
            ProfessionalExp: [
              {
                ...experienceData,
                tag: 0 // Include the tag field for ProfessionalExp
              }
            ],
            Language: [], // Adjust as needed
            Skill: [], // Adjust as needed
            Interest: [], // Adjust as needed
            Orders: {
              Education: 0,
              ProfessionalExp: 1,
              // Include other Orders fields as needed
            }
          }
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to update project info');
      }
  
      navigate('/dashboard'); // Redirect to the next step
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div className="wrapper-experience">
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1>Professional Experience</h1>
          <div className="input-box">
            <input type="text" name="city" placeholder="City" value={experienceData.city} onChange={handleChange} required />
            <FaCity className="icon" />
          </div>
          <div className="input-box">
            <input type="text" name="description" placeholder="Description" value={experienceData.description} onChange={handleChange} required />
            <IoBriefcase className="icon" />
          </div>
          <div className="input-box">
            <input type="text" name="companyName" placeholder="Company Name" value={experienceData.companyName} onChange={handleChange} required />
            <FaCalendarAlt className="icon" />
          </div>
          <div className="input-box">
            <input type="text" name="finishYear" placeholder="Finish Year" value={experienceData.finishYear} onChange={handleChange} required />
            <FaCalendarAlt className="icon" />
          </div>
          <div className="input-box">
            <input type="text" name="finishMonth" placeholder="Finish Month" value={experienceData.finishMonth} onChange={handleChange} required />
            <FaCalendarAlt className="icon" />
          </div>
          <div className="input-box">
            <input type="text" name="position" placeholder="Position" value={experienceData.position} onChange={handleChange} required />
            <IoBriefcase className="icon" />
          </div>
          <div className="input-box">
            <input type="text" name="startMonth" placeholder="Start Month" value={experienceData.startMonth} onChange={handleChange} required />
            <FaCalendarAlt className="icon" />
          </div>
          <div className="input-box">
            <input type="text" name="startYear" placeholder="Start Year" value={experienceData.startYear} onChange={handleChange} required />
            <FaCalendarAlt className="icon" />
          </div>
          <button type="submit">
            Next Step
            <CiLocationArrow1 className="icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Experience;
