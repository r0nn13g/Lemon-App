import React from 'react';
import '../Styles/Restaurant.css';
import { Link } from 'react-router-dom';


function Restaurant( {singleRestaurant} ) {

  return (
    <div className='restaurant-container'>
        <Link className='restLink' to={`/restaurant/${singleRestaurant.id}`}>
          <div className='restaurant-data'>
            <div className='image-container'>
              <img className="restaurant-image"  src={singleRestaurant.restaurant_sprites} alt='restaurant stock'/>
            </div>
            <div className='restaurant-name'>
                {singleRestaurant.name}
            </div>
            <div className='restaurant-address'>
                {singleRestaurant.add}
            </div>
          </div>
        </Link>
    </div>
  )
}

export default Restaurant