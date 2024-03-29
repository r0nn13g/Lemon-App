import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../Styles/Login.css";

const API= process.env.REACT_APP_API_URL;

function Login({setLoginText, carts, setCarts}) {
  let navigate = useNavigate();
  const [login, setLogin] = useState({
    username:"",
    password:""
});


const handleTextChange = (event) => {
    setLogin({...login, [event.target.id]: event.target.value});
};

const cartId = carts.map((cart) => cart.orderNumber)

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API}/auth/signin`, login)
    .then((res) =>{
      localStorage.setItem("cartID", cartId)
      localStorage.setItem("userID", res.data.id) 
      
      setLoginText(true)
      navigate("/")
    })
};

  return (
    <div className="form-container">
      <form id="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
            <input
                id="username"
                value={login.username}
                type="text"
                onChange={handleTextChange}
                placeholder="..username"
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                value={login.password}
                type="password"
                onChange={handleTextChange}
                placeholder="..password"
            />
            <button className="submit-btn">Submit</button>
        <div className="sign-up-link-container">
          <Link className="sign-up-link" to="/signup">Don't have an account? Sign up!</Link>
        </div>
      </form>
    </div>
  );
};



export default Login;