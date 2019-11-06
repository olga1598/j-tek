import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="navbar-brand">
                    <img src="/jtek-logo.jpg" alt="logo" className="logo" />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="is-active" exact>Welcome</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="is-active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/attorneys" className="nav-link" activeClassName="is-active">Attorneys</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link" activeClassName="is-active">Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/disclaimer" className="nav-link" activeClassName="is-active">Disclaimer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/privacy" className="nav-link" activeClassName="is-active">Privacy</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
