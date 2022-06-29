import "../Styles/cart.css";
import axios from "axios";
import food_container from "../assets/food_container.png"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckOut from "./Checkout.js";

// Environmental variable
const API = process.env.REACT_APP_API_URL;

//Populates Cart
function Cart({ carts, setCarts, setCheckedOut}) {
  let navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  
//Retrieves active cart
  const getActiveCart = async () => {
    const res = await axios.get(`${API}/carts/${userID}/active`);
      setCarts(res.data);     
  }

  useEffect(() => {
    // axios
    //   .get(`${API}/carts/${userID}/active`)
    //   .then((res) => {
    //     // console.log(res.data)
    //     if(res.data.Error){
    //       // console.log("add things to thecart ");
    //     }else{
    //       setCarts(res.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    getActiveCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID]);

  
//Delete cart item by user

  // const handleDelete = () => {
  //   axios.delete(`${API}/customers/${userID}/deleteItem`)
  //   .then((res) => {
  //     console.log("hello")
  //   })
  //   .catch((err) =>{
  //     console.log(err);
  //   });
  // };

  const handleCheckout = async () => {
    // console.log("checkout ")
    await getActiveCart();
    axios.put(`${API}/carts/submit`, {userID})
    .then((res) => {
     setTimeout(()=>navigate(`/carts/inactive/${carts[0].orderNumber}`), 3000)
    })
    .catch((err) => {
      console.log(err)
    }) 
  }
  console.log(carts)

  const activeCart = carts?.map((product) => {
    return (
      <div key={product.orderNumber} className="active-cart">
        <div id="order-details">
          <div id="order-num"><h1>Order: # {product.orderNumber}</h1></div>
          
          {product.items.map((item) => {
            return (
              <div key={item.id} className="meal-container">
                  <img id="food-img" src={food_container} alt="food icon"/>
                <div className="restaurant-name"><h2>{product.restaurant}</h2></div>
                <div className="meal-details">
                  <p>Dietary: <b>{item.name}</b></p>
                  <div id="quantity">
                  </div>
                </div>
                  <input type="number" id="cart-quantity" name="quantity" value="1" min="1" max={item.quantity}/>
                  {/* <button onClick={()=>handleDelete()} id="delete-item-btn">Delete</button> */}
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  })

  return (
    <div className="cart-container">

      <div>
        {carts[0]?.items.length < 1 ? (
          <div className="active-empty-cart">          
          <Link to="/"> Start your order </Link>
          </div>
          ): (
            <div className="active-cart-check">
             <div>
             {activeCart}
             </div>
             
             <CheckOut carts={carts} handleCheckout={handleCheckout}/>
           {/* <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>  */}
           </div>
        )}
      </div>
     
    </div>
  );
}
export default Cart;