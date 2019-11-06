import React from 'react';
import attorneys from "../../utils/attorneys.json";
import { Link } from "react-router-dom";

const DetailedBio = (props) => {
//     console.log(props.match.params.id);
// console.log(attorneys[props.match.params.id-1]);
const id = props.match.params.id - 1;
console.log(attorneys[id]);
const profile = attorneys[id];
    return (
        <section className="info">
                <h1 className="firm-name">{profile.name}</h1>
            <div className="container">

            <hr className="style" />
            <Link to={`/attorneys`} className="bio">Back to the list of all Attorneys</Link>


                <div className="row">
                    <div className="col-sm-4">
                        <img className="group-image" src={profile.image} alt="group" />          
                    </div>
                    <div className="col-sm-8">
                        {profile.info.map(i => (
                            <p key={i}>{i}</p>
                        ))}
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default DetailedBio
