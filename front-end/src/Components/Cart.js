import "../Styles/cart.css";
import axios from "axios";
import food_container from "../assets/mealkit-products-image.png"
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
  
  //asynchronous function makes put request at cart submission
  const handleCheckout = async () => {  
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

  //Cart elements displayed on /carts 
  const activeCart = carts?.map((product) => {
    return (
      <div className="active-cart" key={product.orderNumber} >
        <div className="order-num-container">
          <h2>Cart</h2>
          <h6>Order: # {product.orderNumber}</h6>
        </div>
          {product.items.map((item) => {
        console.log(product)
            return (
              <div key={item.id} className="cart-item">
                  <div className="food-img-container">
                    <img id="meal-kit" src={food_container} alt="food icon"/>
                  </div>
                  <div className="restaurant-name-container">
                  <h5>{item.name}</h5>
                  </div>
                <div className="meal-details">
                  <h5>{item.quantity}</h5>
                </div>
                  {/* <button onClick={()=>handleDelete()} id="delete-item-btn">x</button> */}
              </div>
            );
          })}
      </div>
    );
  })

  return (
    <div className="cart-container">
      <div className="cart-is-active">
        {carts[0]?.items.length < 1 ? (
        <div className="active-empty-cart">          
          <Link to="/"> Start your order </Link>
        </div>
          ): (
        <div className="active-cart-check">
            {activeCart}
            <CheckOut carts={carts} handleCheckout={handleCheckout}/>
           {/* <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>  */}
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;