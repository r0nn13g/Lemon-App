import "../Styles/home.css";
import FloatingLinks from "../Components/FloatingLinks";
import Splash from "../Components/Splash";
import Restaurants from "../Components/Restaurants";
import Map from "../Components/Map";
import { useState } from "react";
import FilterBar from "../Components/FilterBar";
import CarouselComp from "../Components/CarouselComp";

function Home({ loginText }) {
  const [isChecked, SetIsChecked] = useState(false);

  const handleCheckChange = () => {
    SetIsChecked(!isChecked);
  };

  return (
    <div>
      {!localStorage.getItem("userID") ? (
        <div className="home-container">
          <Splash />
          <FloatingLinks />
        </div>
        ) : (
          <div className="mapView">
              <CarouselComp/>
          <input
            type="checkbox"
            className="mapView"
            id="map-view"
            name="map-view"
            value="map-view"
            checked={isChecked}
            onChange={handleCheckChange}
          /> MAP VIEW
          {isChecked ? (
            <div className="map-container-checked">
              <Map/>
            </div>
          ):(
            <div className="loggedInDisplay-container">
              <div className="c-container">
                  <input id="restaurant-locator-search" type="text" placeholder="Search.."></input>
                  <button type="submit" className="search-button" >Go</button>
              </div>
              <div className="f-container">
                <FilterBar />
              </div>
              <div className="r-container"> 
                <Restaurants />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
