import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaHome, FaCity } from "react-icons/fa";
import { MdSignpost } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Formdata = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        city: "",
        postalNumber: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate("/Education");
    };

    return (
        <div className="page">
            <div className="wrapper-data">
                <div className="form-box login">
                    <form onSubmit={handleSubmit}>
                        <h1>Personal Data</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                            <FaPhone className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                            <FaHome className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                            <FaCity className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="postalNumber"
                                placeholder="Postal Number"
                                value={formData.postalNumber}
                                onChange={handleChange}
                                required
                            />
                            <MdSignpost className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <IoIosMail className="icon" />
                        </div>
                        <button type="submit">
                            Education
                            <CiLocationArrow1 className="icon" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formdata;
