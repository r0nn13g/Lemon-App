import React from "react";
import "../Styles/home.css";
import { useState } from "react";
import Map from "../Components/Map";
import Switch from '@mui/material/Switch';
import FilterBar from "../Components/FilterBar";
import SearchIcon from '@mui/icons-material/Search';
import Restaurants from "../Components/Restaurants";
import HomePageLanding from "../Components/HomePageLanding";

function Home({ loginText }) {
  const [isChecked, SetIsChecked] = useState(false);

  const handleCheckChange = () => {
    SetIsChecked(!isChecked);
  };

  return (
    <div>
      {!localStorage.getItem("userID") ? (
        <div className="home-container">
          <HomePageLanding />
        </div>
        ) : (
          <div className="mapView">
          <Switch
            checked={isChecked}
            onChange={handleCheckChange}
            inputProps={{ 'aria-label': 'controlled' }}
            /> MAP
          {isChecked ? (
            <div className="map-container-checked">
              <Map/>
            </div>
          ):(
            <div className="loggedInDisplay-container">
              <div className="f-container">
                <FilterBar />
              </div>
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
