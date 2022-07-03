import React from 'react'
import axios from "axios";
import "../Styles/previousCart.css"
import { useState, useEffect } from "react";
import { useParams,useNavigate} from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function PreviousCart() {

  const [oldCarts, setOldCarts] = useState([]);
  const userID = localStorage.getItem("userID");
  let {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/carts/${userID}/active`)
      .then((res) => {
        setOldCarts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userID]);

  const handleGoBack = () =>{
    navigate("/")
  }

  console.log(oldCarts)
  // eslint-disable-next-line
  let previousOrder = oldCarts.find((cart) => cart.orderNum == id );
  console.log(previousOrder)
  let previousOrderInfo = previousOrder?.items.map((item) => {
    return(
      <div>
          <div className="info-container" key={item.id}>
              <div className="info-name">Meal Type: {item.name}</div>
                <div className="info-quantity">Quantity: {item.quantity}</div>
          </div>
        </div>
    )
  })
  console.log(previousOrderInfo)
  
    return (
      <div className="order-success-container">
          <img className="order-processing-img" src="https://cdn.dribbble.com/users/393062/screenshots/14492170/media/67f661f7f825b62980571026e1280675.gif" alt="vegetables-digital-transform"></img>
            <div className="successful-order-text">
              <h2>Your order is currently being worked on!</h2>
                <br></br>
                  Thank you for making an impact
            </div>
            {/* <div className="previous-order-container">
              <h2>{previousOrder?.restaurants}</h2>
              <div className="order-info">
              {previousOrderInfo}
              </div>
            </div> */}
            <div className='previous-btn-container'>
            <button className="previous-btn" onClick={handleGoBack} >Keep Shopping</button>
            </div>
    </div>
  )
}

export default PreviousCart