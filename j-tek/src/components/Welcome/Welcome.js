import React from 'react';
import "./Welcome.css";

const Welcome = () => {
    return (
        <section className="info">
            <h1 className="firm-name">J-TEK LAW PLLC</h1>
            <h2 className="firm">Intellectual Property legal Services</h2>
            <div className="container">
                <hr className="style" />
                <div className="row">
                    <div className="col-sm-5">
                        <h3>Firm news:</h3>
                        <p className="welcome-text">J-TEK is delighted to welcome <strong>Mark A. Ussai</strong>, a talented and experienced patent attorney in the mechanical, electromechanical and applied software technical fields, to our firm.  Please learn more about Mark on our Attorneys page.  </p>
                    </div>
\                    <div className="col-sm">
                        <img className="group-image" src="/welcome-page-group.jpg" alt="group" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Welcome;


// <div className="row">
// <div className="col-sm">
//     <img className="group-image" src="/welcome-page-group.jpg" alt="group" />
// </div>
// <div className="col-sm">
//     <p className="welcome-text">J-TEK is delighted to welcome Mark A. Ussai, a talented and experienced patent attorney in the mechanical, electromechanical and applied software technical fields, to our firm.  Please learn more about Mark on our Attorneys page.  </p>
// </div>
// </div>


// <p className="text">
// <br />

// J-TEK LAW PLLC is committed to providing the highest quality intellectual property legal services for the procurement and enforcement of U.S. and foreign rights. Our managing director, Jeffrey Tekanic, has acquired a comprehensive knowledge of U.S., European and Japanese intellectual property law and practice through his years of experience practicing around the world. Director Scott Wakeman has practiced intellectual property law in the U.S. for over 20 years and has worked extensively with U.S. and foreign clients. With this international experience, we can develop efficient and effective strategies for maximizing the value of your intellectual property rights in all major world markets.  


// J-TEK LAW PLLC is located in Fairfax, Virginia, a short drive from the United States Patent and Trademark Office (USPTO), Washington Dulles International Airport and Ronald Reagan National Airport.
// </p>
