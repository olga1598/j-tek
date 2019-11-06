import React from "react";
import { Link } from "react-router-dom";
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
                        <Link to="/" className="nav-link" activeClassName="is-active" exact>Welcome</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" activeClassName="is-active">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/attorneys" className="nav-link" activeClassName="is-active">Attorneys</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacts" className="nav-link" activeClassName="is-active">Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/disclaimer" className="nav-link" activeClassName="is-active">Disclaimer</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/privacy" className="nav-link" activeClassName="is-active">Privacy</Link>
                    </li>
                </ul>
                </div>  
            </nav>
        </div>
    )
}

export default Navbar
