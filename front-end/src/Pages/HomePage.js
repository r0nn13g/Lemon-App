import React from "react";
import "../Styles/home.css";
import { useState } from "react";
import Map from "../Components/Map";
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import Restaurants from "../Components/Restaurants";
import HomePageLanding from "../Components/HomePageLanding";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";

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
              <h1>Restaurants</h1>
              </div>
              <FormGroup>
                <FormControlLabel control={ <Switch checked={state.darkmode} onChange={toggleDarkMode} name="darkmode" inputProps={{ 'aria-label': 'controlled' }}/>} label="Dark Mode" />
                <FormControlLabel control={ <Switch checked={isChecked} onChange={handleCheckChange2} inputProps={{ 'aria-label': 'controlled' }}/>} label="Map View" />
              </FormGroup>
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
            <div>hello</div>
          ):(
            false
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
