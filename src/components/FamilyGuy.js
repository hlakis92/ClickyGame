import React from "react";
import "./FamilyGuy.css";

const FamilyGuy = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container hvr-wobble-to-bottom-right">
      <img style={{width: 80, height: 145}}alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FamilyGuy;