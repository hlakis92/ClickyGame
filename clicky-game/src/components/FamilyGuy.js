import React from "react";
import "./FamilyGuy.css";

const FamilyGuy = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default FamilyGuy;