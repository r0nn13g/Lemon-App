import { Routes , Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import './App.css';

//import of stand alone components 
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

//import of pages that are linked to components

import Home from './Pages/HomePage';
import HomePageLanding from './Components/HomePageLanding';
import CurrentCart from './Pages/CurrentCart';
import Login from './Components/Login';
import Signup from './Components/Signup';
import FourOFour from './Pages/Four0Four';
import Map from './Components/Map';
import Restaurants from './Components/Restaurants';
import RestaurantDetails from './Components/RestaurantDetails';
import ProductByRestaurant from './Components/ProductByRestaurant';
import PreviousCart from './Components/PreviousCart';


function App() {

  const [loginText, setLoginText] = useState(false);
  const [carts, setCarts] = useState([]);
  const [ checkedout, setCheckedOut ] = useState(false);

  useEffect( ()=> {
    let userId = localStorage.getItem("userID")
    if(userId){
      setLoginText(true)
    }else{
      setLoginText(false)
    }
  },[checkedout])

  return (
    <div className="main">
      <NavBar  setLoginText={setLoginText}/>
      <Routes>
        <Route path="*" element={<FourOFour />} />
        <Route path="/" element={<Home loginText={loginText}/>}/>
        <Route path="/home" element={<HomePageLanding />}/>
        <Route path="/carts" element={<CurrentCart setCarts={setCarts} carts={carts}/>} setCheckedOut={setCheckedOut}/>
        <Route path='/login' element={<Login setLoginText={setLoginText} setCarts={setCarts} carts={carts}/>} />
        <Route path='/signup' element={<Signup/>} />
        {/* <Route path='/carts/inactive' element={} /> */}
        <Route path='/restaurant-locator' element={<Map/>} />
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/carts/inactive/:id' element={<PreviousCart/>}/>
        {/* <Route path='/products' element={<Products/>}/> */}
        <Route path='/products/:restaurant_id' element={<ProductByRestaurant/>} />
        <Route path='/restaurant/:id' element={<RestaurantDetails/>} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
