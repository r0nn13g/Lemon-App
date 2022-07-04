import React from "react";
import "../Styles/home.css";
import { useState } from "react";
import Map from "../Components/Map";
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import Restaurants from "../Components/Restaurants";
import HomePageLanding from "../Components/HomePageLanding";

function Home({ loginText }) {
  const [isChecked, SetIsChecked] = useState(false);

  const handleCheckChange = () => {
    SetIsChecked(!isChecked);
  };

  const handleCheckChange2 = () => {
    SetIsChecked(false)
  }

  return (
    <div>
      {!localStorage.getItem("userID") ? (
        <div className="home-container">
          <HomePageLanding />
        </div>
        ) : (
          <div className="mapView">
            <div className="home-banner">
              <h1>Restaurants</h1>
              
              </div>
          <Switch
            checked={isChecked}
            onChange={handleCheckChange}
            inputProps={{ 'aria-label': 'controlled' }}
            /> MAP
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Switch
            checked={false}
            onChange={handleCheckChange2}
            inputProps={{ 'aria-label': 'controlled' }}
            /> DARK 🌗
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
              <div className="c-container">
                  <input id="restaurant-locator-search" type="text" placeholder="Subscribe"></input>
                  <button type="submit" className="search-button" ><SearchIcon /></button>
              </div>
        </div>
      )}
    </div>
  );
}

export default Home;
