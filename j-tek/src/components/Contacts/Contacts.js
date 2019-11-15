import React from 'react';
import "./Contacts.css";


const Contacts = () => {
    return (
        <section className="team">
            <div className="overlayed-text">
                <h1 className="meet">OUR CONTACTS.</h1>
            </div>
            <div className="container">

                <hr className="style" />
                <br />
                
                <p className="inquiries">
                    General inquiries to the firm may be sent to mail@jtek-law.com. However, please understand that any information sent to us on an unsolicited basis may not be treated as confidential. Nor will sending an e-mail to us generally be considered as a request to take action with respect to the information. Any request to take action, such as filing a patent application with a patent office, can only be made by an existing client of the firm. Please review the firm’s full disclaimer and privacy statements before communicating through www.jtek-law.com or mail@jtek-law.com.
                </p>

                <div className="row">
                    <div className="col-sm-5">
                        <p>
                            <a href="https://www.google.com/maps/place/4000+Legato+Rd,+Fairfax,+VA+22033/@38.8658032,-77.367386,17z/data=!3m1!4b1!4m5!3m4!1s0x89b64f449e0d32d3:0xaefaec3eacdd3326!8m2!3d38.865799!4d-77.365192" rel="noopener noreferrer" target="_blank">
                                <img className="map-img" src="./map.png" alt="map" />
                            </a>
                        </p>
                        <p>
                            <a href="https://www.google.com/maps/place/4000+Legato+Rd,+Fairfax,+VA+22033/@38.8658032,-77.367386,17z/data=!3m1!4b1!4m5!3m4!1s0x89b64f449e0d32d3:0xaefaec3eacdd3326!8m2!3d38.865799!4d-77.365192" rel="noopener noreferrer" target="_blank">
                                Click here for directions...
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-7">
                        <h3>J-TEK LAW PLLC</h3>
                        <div className="address">
                            <span>4000 Legato Road, Suite 1100</span>
                            <br />
                            <span>Fairfax, VA 22033</span>
                            <br />
                            <span>U.S.A.</span>
                            <br />
                            <span>Telephone: (703) 896-7960</span>
                            <br />
                            <span>
                                E-mail address:
                                    <a href="mailto: mail@jtek-law.com"> mail@jtek-law.com
                                    </a>
                            </span>
                            <br />
                            <div className="directions">
                                <h4>Location</h4>
                                <p>
                                    We are located in the Centrepoint II building at the intersection of West Ox Road and Lee Jackson Memorial Highway (Route 50) in Fairfax County, Virginia.
                                    For those driving to our building, free parking is available behind the building and in the parking garage below the building.
                                </p>
                                <h4>Directions: from Washington Dulles International Airport: </h4>
                                <p>
                                    Follow signs for Route 28 South. After 4.6 miles, exit to Route 50 East. Follow Route 50 East for 4.1 miles and exit on the right to West Ox Road. Stay in the lane for “West Ox Road North (Legato Road)” and make a right at the top of the ramp. Then move left immediately and enter the left turn lane for Legato Road.
                                </p>
                                <h4>Directions from Ronald Reagan National Airport:</h4>
                                <p>
                                    Exit the airport and follow signs for Route 66. Follow Route 66 West for 14.3 miles and exit on the right to Route 50 West. Follow Route 50 West for about 1 mile and take the exit on the right for West Ox Road South. Keep to the left on West Ox Road and enter the left turn lane for Legato Road.
                                </p>
                                <h4>Directions from metro:</h4>
                                <p>
                                    For those traveling by public transportation, our building is six miles (ten kilometers) from the Vienna Station stop on the Orange Metro line. Taxicabs are available at the Metro station. You can also take the Fairfax Connector Bus 621 from the south exit of the Vienna Metro to the Fairfax Towne Center stop directly across from our building.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contacts;
