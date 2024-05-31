import React, { useState } from "react";
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Invalid credentials');
            }

            setError('');
            localStorage.setItem('token', data.Authorization);
            navigate("/dashboard");
        } catch (error) {
            setError(error.message || 'Invalid credentials');
        }
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Signup failed');
            }

            setError('');
            localStorage.setItem('token', data.Authorization);
            navigate("/dashboard");
        } catch (error) {
            setError(error.message || 'Signup failed');
        }
    };

    return (
        <div className="page">
          <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    {error && <div className="error">{error}</div>}
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <IoIosMail className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <IoLockClosedOutline className="icon" />
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account yet ? <button type="button" onClick={registerLink}>Sign up</button></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form onSubmit={handleRegisterSubmit}>
                    <h1>Registration</h1>
                    {error && <div className="error">{error}</div>}
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder='First Name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder='Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <IoIosMail className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <IoLockClosedOutline className="icon" />
                    </div>
                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <button type="button" onClick={loginLink}>Log in</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
