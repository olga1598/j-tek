import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    hideNavbar = () => {
        this.setState({
            collapsed: true,
        });
    }

    render () {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <nav className="navbar navbar-expand-sm navbar-dark">
                <img src="/jtek-logo.jpg" alt="logo" className="logo" />
                <button className={`${classTwo}`} onClick={this.toggleNavbar} type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${classOne}`} id="navbarToggler">
                    <ul className="navbar-nav mr-auto" onClick={this.hideNavbar}>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" exact>Welcome</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
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
        )
    }
}

export default Navbar;