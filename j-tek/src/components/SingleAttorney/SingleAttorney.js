import React from 'react';
import { Link } from "react-router-dom";

const SingleAttorney = (props) => {
    console.log(props)
    return (
        <div>
            <div className="card" style={{"width": "14rem"}}>
                <img className="single-image" src={props.pic} alt="group" />          
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">May be some text here.</p>
                    <Link to={`/attorneys/${props.id}`} className="bio" onClick={() => props.click(props.id)}>Learn bio...</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleAttorney
