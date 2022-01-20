import React from "react";
import markerIcon from "../../IMG/marker.png";
import "../../CSS/marker.css";

function Marker(props) {
  // 1. if props 'active' === true, then render the component with 'active' className (have bigger size, etc)
  return props.active ? (
    <div className="marker active">
      <div className="marker-pin">
        <img src={markerIcon} className="marker-pin-icon" />
      </div>
      <div className="marker-text-container">
        <div className="marker-text">{props.text}</div>
        <div className="marker-text-desc">{props.desc}</div>
      </div>
    </div>
  ) : (
    // 2. if props 'active' !== true, render component normally
    <div className="marker">
      <div className="marker-pin">
        <img src={markerIcon} className="marker-pin-icon" />
      </div>
      <div className="marker-circle"></div>
      <div className="marker-text-container">
        <div className="marker-text">{props.text}</div>
        <div className="marker-text-desc">{props.desc}</div>
      </div>
    </div>
  );
}

export default Marker;
