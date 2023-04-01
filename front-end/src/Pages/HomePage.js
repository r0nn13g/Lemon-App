import React from "react";
import "../Styles/home.css";
import { useState } from "react";
import Map from "../Components/Map";
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import Restaurants from "../Components/Restaurants";
import HomePageLanding from "../Components/HomePageLanding";
import MaterialUISwitch from "../Components/MaterialUISwitch";

function Home({ loginText }) {
  const [isChecked, SetIsChecked] = useState(false);
  //using state to set dark mode toggle to false as default
  const [state, setStatte] = React.useState({
      darkmode: false
  });
  //function toggles dark mode by setting state and changing class list properties
  const toggleDarkMode = (event) => {
    setStatte({
      ...state,
      [event.target.name]: event.target.checked,
    });
    let element = document.body;
    element.classList.toggle("dark-mode");
  };

  const handleCheckChange2 = () => {
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
            <div className="home-banner">
              <h1>Restaurants in your area!</h1>
              </div>
              <div className="toggle-switches">
                <div className="darkmode-switch-container">
                  <MaterialUISwitch className="darkmode-switch" checked={state.darkmode} onChange={toggleDarkMode} label="MUI switch" name="darkmode"/> dark mode
                </div>
                <div className="mapview-switch-container">
                  <Switch className="mapview-switch"checked={isChecked} onChange={handleCheckChange2} name="map" /> map view
                </div>
              </div>
              <div className="restaurant-search-container">
              <input className="restaurant-locator-search" type="text" placeholder="...Search"></input>
              <button id="search-button" type="submit"  ><SearchIcon /></button>
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
