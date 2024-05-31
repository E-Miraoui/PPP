import React, { useState } from "react";
import { FaSchool, FaCalendarAlt } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { GrCertificate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import './Education.css';

const Education = () => {
    const [educationData, setEducationData] = useState({
        instituteName: "",
        degree: "",
        lastMonth: "",
        lastYear: "",
        startMonth: "",
        startYear: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationData({
            ...educationData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("educationData", JSON.stringify(educationData));
        navigate("/experience");
    };

    return (
        <div className="page">
            <div className="wrapper-box">
                <div className="form-box login">
                    <form onSubmit={handleSubmit}>
                        <h1>Education</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                name="instituteName"
                                placeholder="Institute Name"
                                value={educationData.instituteName}
                                onChange={handleChange}
                                required
                            />
                            <FaSchool className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="degree"
                                placeholder="Degree"
                                value={educationData.degree}
                                onChange={handleChange}
                                required
                            />
                            <GrCertificate className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="lastMonth"
                                placeholder="Last Month"
                                value={educationData.lastMonth}
                                onChange={handleChange}
                                required
                            />
                            <FaCalendarAlt className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="lastYear"
                                placeholder="Last Year"
                                value={educationData.lastYear}
                                onChange={handleChange}
                                required
                            />
                            <FaCalendarAlt className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="startMonth"
                                placeholder="Start Month"
                                value={educationData.startMonth}
                                onChange={handleChange}
                                required
                            />
                            <FaCalendarAlt className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="startYear"
                                placeholder="Start Year"
                                value={educationData.startYear}
                                onChange={handleChange}
                                required
                            />
                            <FaCalendarAlt className="icon" />
                        </div>
                        <button type="submit">
                            Professional Experience
                            <CiLocationArrow1 className="icon" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Education;
