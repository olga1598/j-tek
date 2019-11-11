import React from 'react';
import { Link } from "react-router-dom";
import "./SingleAttorney.css";

const SingleAttorney = (props) => {
    console.log(props)
    return (
        <div>
            <div className="card" style={{"width": "14rem"}}>
            <Link to={`/attorneys/${props.id}`} className="bio" ><img className="single-image" src={props.pic} alt="group" /></Link>          
                <div className="card-body">
                    <h5 className="card-title"><strong>{props.name}</strong></h5>
                    <Link to={`/attorneys/${props.id}`} className="bio" >Learn bio...</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleAttorney
