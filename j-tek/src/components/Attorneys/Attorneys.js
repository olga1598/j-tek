import React, { Component } from 'react';
import "./Attorneys.css";
import attorneys from "../../utils/attorneys.json";
import SingleAttorney from "../SingleAttorney/SingleAttorney";

class Attorneys extends Component {
    state = {
        attorneys
    }

    // learnBioClickHandle = (id) => {
    //     console.log(id)
    //     console.log("inside learn more bio")
    // }

    render() {
        return (
            <section className="team">
                <div className="overlayed-text">
                    <h1 className="meet">MEET OUR TEAM.</h1>
                    <h1 className="meet-team">J-TEK LAW PLLC</h1>
                </div>
            <div className="container">

                <hr className="style" />
                <br />
                    
                    <div className="row">                   
                        {this.state.attorneys.map(attorney => (
                            <div className="col-sm">
                                <SingleAttorney 
                                    key={attorney.id} 
                                    id={attorney.id}
                                    name={attorney.name} 
                                    info={attorney.info} 
                                    pic={attorney.image}
                                    clicked={attorney.clicked}
                                />
                            </div>
                        ))}
                    </div>    
                </div>
            </section>
        )
    }
}

export default Attorneys


