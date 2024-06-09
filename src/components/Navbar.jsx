import React from 'react';
import './Navbar.css';
import angel from "../Images/dclogo.png";

const Navbar = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={angel} alt="Logo" className="logo-icon" />
            </div>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#home">
                            <span className="icon">
                                <i className="fas fa-home"></i>
                            </span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#about">
                            <span className="icon">
                                <i className="far fa-bookmark"></i>
                            </span>
                            <span className="text">About</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#services">
                            <span className="icon">
                                <i className="fas fa-church"></i>
                            </span>
                            <span className="text"> Messages</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#services">
                            <span className="icon">
                                <i className="fas fa-heart"></i>
                            </span>
                            <span className="text"> Testimonials</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#events">
                            <span className="icon">
                                <i className="fas fa-calendar-alt"></i>
                            </span>
                            <span className="text">Events</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#contact">
                            <span className="icon">
                                <i className="far fa-book"></i>
                            </span>
                            <span className="text">Give</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#contact">
                            <span className="icon">
                                <i className="far fa-user"></i>
                            </span>
                            <span className="text">Contact</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
