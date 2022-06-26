import axios from 'axios';
import React from 'react';
import '../Styles/Restaurants.css';
import Restaurant from './Restaurant';
import {useState, useEffect} from "react";
import RestaurantCardSkeleton from './RestaurantCardSkeleton';

const API = process.env.REACT_APP_API_URL;

function Restaurants() {
  const [ restaurants, setRestaurants ] = useState([]);
  const [isLoading, setIsLoading ] =  useState(true);

  useEffect(() => {
    axios.get(`${API}/restaurants`)
    .then((res) => {
      setRestaurants(res.data)
      setIsLoading(false);
    }).catch((err) => console.log(err))
  }, [])

  return (
    <div className='all-restaurants-container'>
      {isLoading && <RestaurantCardSkeleton />}
      {restaurants.map((restaurant) => {
        return (
        <Restaurant key={restaurant.id} singleRestaurant={restaurant}/>
      )})}
    </div>
  )
}

export default Restaurants