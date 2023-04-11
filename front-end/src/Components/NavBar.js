import React from "react";
import "../Styles/navBar.css";
import logo from "../assets/Lemon.png";
import PersonIcon from '@mui/icons-material/Person';
import TemporaryDrawer from "./TemporaryDrawer";
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


function NavBar({ setLoginText }) {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    setLoginText(false); 
    navigate('/');
  };

  
  // let Login_Logout = localStorage.getItem("userID") ? (
  //   <div className="profile-logout-container">
  //     <Link to="/" onClick={handleLogout}><LogoutOutlinedIcon/></Link>
  //     &nbsp;
  //     <Link to="/carts/inactive"><PersonIcon/></Link>
  //     &nbsp;
  //     <Link to="/carts"><ShoppingCartIcon/></Link>
  //     <TemporaryDrawer />
  //   </div>
  // ) : (
  //   <div className="login-container">
  //     <Link to="/login"><LoginIcon/></Link>
  //     &nbsp;&nbsp;&nbsp;
  //     <TemporaryDrawer />
  //   </div>
  // );

  return (
      <nav className="nav-container">
        <div className="home-logo">
          <Link to="/home">
          <img src={logo} alt="logo" />
          </Link>
        </div>
      <div className="cart">
      <div className="login-container">
       <Link to="/login"><LoginIcon/></Link>
       &nbsp;&nbsp;&nbsp;
       <TemporaryDrawer />
      </div>
          {/* {Login_Logout} */}
      </div>
      </nav>
  );
}

export default NavBar;



  //   return (
  // <div className="profile-logout-container">
  //   <Link to="/" onClick={handleLogout}><LogoutOutlinedIcon/></Link>
  //   &nbsp;
  //   <Link to="/carts/inactive"><PersonIcon/></Link>
  //   &nbsp;
  //   <Link to="/carts"><ShoppingCartIcon/></Link>
  //   <TemporaryDrawer />
  // </div>

  //   <nav className="nav-container">
  //   </nav>
  //     <div className="home-logo">
  //       <Link to="/home">
  //       <img src={logo} alt="logo" />
  //       </Link>
  //     </div>
