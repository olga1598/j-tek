import React, { Component } from 'react';
import "./Attorneys.css";
import attorneys from "../../utils/attorneys.json";
import SingleAttorney from "../SingleAttorney/SingleAttorney";

class Attorneys extends Component {
    state = {
        attorneys
    }

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
                                <SingleAttorney key={attorney.id} name={attorney.name} info={attorney.info} pic={attorney.image} />
                            </div>
                        ))}
                    </div>    
                </div>
            </section>
        )
    }
}

export default Attorneys


// <div class="col-sm">
// <div class="card" style={{"width": "14rem"}}>
//     <img className="single-image" src="/pic1.jpg" alt="group" />          
//     <div className="card-body">
//         <h5 className="card-title">Jim Bim</h5>
//         <p className="card-text">May be some text here.</p>
//         <a href="#" className="bio">Learn bio...</a>
//     </div>
// </div>
// </div>
// <div className="col-sm">
// <div class="card" style={{"width": "14rem"}}>
//     <img className="single-image" src="/pic1.jpg" alt="group" />          
//     <div className="card-body">
//         <h5 className="card-title">Jim Bim</h5>
//         <p className="card-text">May be some text here.</p>
//         <a href="#" className="bio">Learn bio...</a>
//     </div>
// </div>
// </div>
// <div className="col-sm">
// <div class="card" style={{"width": "14rem"}}>
//     <img className="single-image" src="/pic3.jpg" alt="group" />          
//     <div className="card-body">
//         <h5 className="card-title">Jim Bim</h5>
//         <p className="card-text">May be some text here.</p>
//         <a href="#" className="bio">Learn bio...</a>
//     </div>
// </div>
// </div>
// <div class="col-sm">
// <div class="card" style={{"width": "14rem"}}>
//     <img className="single-image" src="/pic3.jpg" alt="group" />          
//     <div className="card-body">
//         <h5 className="card-title">Jim Bim</h5>
//         <p className="card-text">May be some text here.</p>
//         <a href="#" className="bio">Learn bio...</a>
//     </div>
// </div>
// </div>
