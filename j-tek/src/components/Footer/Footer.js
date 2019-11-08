import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Copyright:{" J-TEK LAW PLLC"} | {"Privacy Policy"} | (703) 896-7960
            </div>
        </footer>
    )
}

export default Footer;
