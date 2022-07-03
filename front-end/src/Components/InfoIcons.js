import React from "react";
import "../Styles/InfoIcons.css";
import infoIcon1 from "../assets/why-hellofresh-icn1.png";
import infoIcon2 from "../assets/why-hellofresh-icn2.png";
import infoIcon3 from "../assets/why-hellofresh-icn3.png";
import infoIcon4 from "../assets/why-hellofresh-icn4.png";

const InfoIcons = () => {
  return(
    <div className="info-icons-wrapper">
      <div id="info-icon-1">
        <img src={infoIcon1} alt="info-icon-1" />
        <h4>Save that chicken</h4>
        <p>Or steak, or fish, or plant protein.</p>
      </div>
        <div id="info-icon-2">
        <img src={infoIcon2} alt="info-icon-2" />
        <h4>No commitment.</h4>
        <p> Skipping weeks or cancelling is super easy.</p>
        </div>
          <div id="info-icon-3">
          <img src={infoIcon3} alt="info-icon-3" />
        <h4>The most 5-star reviews</h4>
        <p>Our selection of meals from different restaurants 
          wows week after week.</p>
          </div>
        <div id="info-icon-4">
        <img src={infoIcon4} alt="info-icon-4" />
        <h4>Fresh and FREE meal kits</h4>
        <p>Chef-created deliciousness. Sign up to get started.</p>
   
      </div>
    </div>
  )
}

export default InfoIcons;