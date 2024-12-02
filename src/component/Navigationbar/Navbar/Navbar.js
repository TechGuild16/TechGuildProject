import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container-fluid mt-2">

       
        <nav className="navbar navbar-expand-lg simple-navbar px-4">
            <a className="navbar-brand simple-brand" href="/">
                NexGen
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link navbar-link home" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-link service" href="/services">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-link projects" href="/projects">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-link about" href="/about">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-link careers" href="/careers">CAREERS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navbar-link blogs" href="/blogs">BLOGS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link contactUs" href="/contact">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
