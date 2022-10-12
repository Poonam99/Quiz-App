import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../quiz img.jpg';
import './Nav.css'

const Navbar = () => {
    return (
        <div>
            <nav className='nav-container'>
                <div className='title-container'>
                    <img src={img} alt="" />
                    <h1>Quiz Winners Team</h1>
                </div>
                <div className='route-container'>
                    <NavLink to={'/home'}>Topic</NavLink>
                    <NavLink to={'/Quiz-Topics'}>Quiz items</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;