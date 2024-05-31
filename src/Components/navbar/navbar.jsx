import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className='item'>
            <div className="container"> {/* Wrap for better layout */}
                <a href="/" className="brand-name">Buildi</a>
                <ul className="nav-links">
                    <li><a href="/">Home Page</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="/login">Login</a></li>

                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;