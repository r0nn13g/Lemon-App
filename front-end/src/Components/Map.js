import React from "react";
import axios from "axios";
import "../Styles/map.css";
// import leaflet from 'leaflet';
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const API = process.env.REACT_APP_API_URL;

const Map = () => {
  const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
      axios.get(`${API}/restaurants`)
        .then((res) => {
          setRestaurants(res.data);
      },
      (error) => console.log("get", error)
      )
        .catch((c) => console.warn("catch", c))
  }, []);
  return(
    <div  className="map-container">
      {/* Map Styling */}
      <MapContainer className="map" center={[40.756211, -73.923164]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='Lemon 2023®'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"/>

        {restaurants.map(restaurant => (
          // Location Markers
          <Marker 
              key={restaurant.id}
              position={[restaurant.lat, restaurant.lon]}
              icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
            <Popup>
                <img id="restaurant-sprite" alt="restaurant-images" src={restaurant.restaurant_sprites} />
                <h1>{restaurant.name}</h1>
                <p><em>{restaurant.cuisine_type}</em></p>
                <p>{restaurant.add}</p>
                <Link style={{ textDecoration: 'none', color: 'black' }} key={restaurant.id} to={`/restaurant/${restaurant.id}`}><button>Order Now</button></Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    )
};

export default Map;