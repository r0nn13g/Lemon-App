import React from "react";
import "../Styles/home.css";
import { useState } from "react";
import Map from "../Components/Map";
import Switch from '@mui/material/Switch';
import Restaurants from "../Components/Restaurants";
import HomePageLanding from "../Components/HomePageLanding";

function Home({ loginText }) {
  const [isChecked, SetIsChecked] = useState(false);
  
  const handleCheckChange = () => {
    SetIsChecked(!isChecked)
  }
  return (
    <div>
      {!localStorage.getItem("userID") ? (
        <div className="home-container">
          <HomePageLanding />
        </div>
        ) : (
          <div className="mapView">
          <div className="mapview-switch-container">
            <Switch className="mapview-switch" checked={isChecked} onChange={handleCheckChange} name="map" />
          </div>
          <div className="restaurant-search-container">
            <input className="restaurant-locator-search" type="text" placeholder="...Search"></input>
          </div>
          {isChecked ? (
            <div className="map-container-checked">
              <Map/>
            </div>
          ):(
            <div className="loggedInDisplay-container">
              <div className="r-container"> 
                <Restaurants />
              </div>
            </div>
          )}
          { isChecked ? (
            <div>Choose a restaurant near you!</div>
            ):(
            true
              )}
              <div className="c-container">
              </div>
        </div>
      )}
    </div>
  );
}

export default Home;
