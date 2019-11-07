import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark">
                    <img src="/jtek-logo.jpg" alt="logo" className="logo" />
\                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" data-target="#navbarToggler" exact>Welcome</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" data-target="#navbarToggler">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/attorneys" className="nav-link">Attorneys</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/disclaimer" className="nav-link">Disclaimer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/privacy" className="nav-link">Privacy</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
