import React from "react";
import "../Styles/navBar.css";
import logo from "../assets/dummy-logo.png";
// import userIcon from "../assets/user-icon.png";
import TemporaryDrawer from "./TemporaryDrawer";
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import PersonIcon from '@mui/icons-material/Person';


function NavBar({ setLoginText }) {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    setLoginText(false); 
    navigate('/');
  };

  
  let Login_Logout = localStorage.getItem("userID") ? (
    <div className="profile-logout-container">
      <Link to="/" onClick={handleLogout}><LogoutOutlinedIcon/></Link>
      &nbsp;
      {/* <Link to="/carts/inactive"><PersonIcon/></Link>
      &nbsp; */}
      <Link to="/carts"><ShoppingCartIcon/></Link>
      <TemporaryDrawer />
    </div>
  ) : (
    <div className="login-container">
      <Link to="/login"><LoginIcon/></Link>
      &nbsp;&nbsp;&nbsp;
    </div>
  );

  return (
    <nav>
      <div className="nav-container">

      <div className="home-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        {/* <Link style={{ textDecoration: 'none', color: 'white' }} component={Link} to={`/`}>
                <h4 className="nav-btns">Our Mission</h4>
        </Link> */}
      </div>
      {/* <div className="navbar-text">Products</div>
      <div className="navbar-text">Locations</div>
      <div className="navbar-text">Our Mission</div>
      <div className="navbar-text">Contact</div> */}
      <div className="cart">
          {Login_Logout}
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
