import { Link, useNavigate } from "react-router-dom";
import "../Styles/navBar.css";
import logo from "../assets/dummy-logo.png";
import userIcon from "../assets/user-icon.png";


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
      <Link to="/" onClick={handleLogout}>Logout</Link>
    
      <Link to="/carts/inactive"><img className="user-icon" src={userIcon} alt="user-icon"></img>&nbsp;&nbsp;Profile</Link>

      <Link to="/carts">Cart</Link>
   
    </div>
  ) : (
    <div className="login-container">
      <Link to="/login">Login/Signup</Link>
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
        <div>
          {Login_Logout}
        </div>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
