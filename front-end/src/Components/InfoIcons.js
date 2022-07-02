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
        <img src={infoIcon1} alt="" />
        <h4>No skimpin’ on the chicken!</h4>
        <p>Or steak, or fish, or plant protein.</p>
      </div>
        <div id="info-icon-2">
        <img src={infoIcon2} alt="" />
        <h4>No commitment whatsoever</h4>
        <p> Skipping weeks or cancelling is super easy.</p>
        </div>
          <div id="info-icon-3">
          <img src={infoIcon3} alt="" />
        <h4>The most 5-star reviews</h4>
        <p>Our huge recipe selection wows week after week.</p>
          </div>
        <div id="info-icon-4">
        <img src={infoIcon4} alt="" />
        <h4>Fresh and affordable</h4>
        <p>Chef-created deliciousness from $7.49 per meal.Get started</p>
   
      </div>
    </div>
  )
}

export default InfoIcons;