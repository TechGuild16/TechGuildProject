import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-fluid pt-3 sticky-top">

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
                        <Link className="nav-link navbar-link home" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbar-link service" to="/services">SERVICES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbar-link projects" to="/projects">PROJECTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbar-link about" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbar-link careers" to="/careers">CAREERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbar-link blogs" to="/blogs">BLOGS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link contactUs" to="/contact">CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
