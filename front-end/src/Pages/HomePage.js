import React from "react";
import "../Styles/home.css";
import { useState } from "react";
import Map from "../Components/Map";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import Restaurants from "../Components/Restaurants";
import HomePageLanding from "../Components/HomePageLanding";

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

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

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
            false
          )}
              <div className="c-container">
              </div>
        </div>
      )}
    </div>
  );
}

export default Home;
