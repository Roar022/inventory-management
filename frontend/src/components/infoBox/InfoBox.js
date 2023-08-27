import React from "react";
import "./infoBox.scss";
const InfoBox = ({ bgColor, title, count, icon }) => {
  return (
    <div className={`info-box ${bgColor}`}>
      <span className="info-icon --color-white">{icon}</span>
      <span className="info-text" >
        <p>{title}</p>
        <h2>{count}</h2>
      </span>
    </div>
  );
};

export default InfoBox;
