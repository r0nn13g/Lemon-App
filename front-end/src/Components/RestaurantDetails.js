import axios from 'axios';
import "../Styles/products.css";
import { useEffect, useState } from 'react';
import ProductByRestaurant from "./ProductByRestaurant";
import {useParams, useNavigate} from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function RestaurantDetails() {
    const [restaurant, setRestaurant ] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`${API}/restaurants/${id}`)
            .then((res) => {
                setRestaurant(res.data);
            }).catch((err) => console.log(err))
        }, [id])

        const navigate = useNavigate();
        
  return (
    <div className="restaurant-products-container">
        <div className="restaurant-details">
            <div><h1>{restaurant.name}</h1></div>
            {/* <div><h5>{restaurant.cuisine_type}</h5></div> */}
            <div><h5>{restaurant.add}</h5></div>
        </div>
            {<ProductByRestaurant id={id}/>}
        {/* <div className='button-link'>
                <button id="back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div> */}
    </div>
  )
};

export default RestaurantDetails