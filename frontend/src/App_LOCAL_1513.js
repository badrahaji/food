<<<<<<< HEAD
=======
<<<<<<< HEAD
import HomePage from "./components/HomePage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ListeRestaurant from "./components/ListeRestaurant";
import Restaurantmenu from "./components/Restaurantmenu";
// jjj
const App = () => {
    return (
<div>
    <BrowserRouter>
    <Routes>
    
<Route index  element={<HomePage/>}></Route>
<Route path="/services/:id"  element={<ListeRestaurant/>}></Route>
<Route path="/services/retaurent/:id"  element={<Restaurantmenu/>}></Route>
=======
>>>>>>> main
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Create from './components/create/Create';
import FoodDetails from './components/foodDetails/FoodDetails';
import FoodCatalog from './components/foodCatalog/FoodCatalog';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import ListeRestaurant from './components/Services/ListeRestaurant';
<<<<<<< HEAD
=======
>>>>>>> badr
>>>>>>> main

function App() {
 const location = useLocation()
 
 useEffect(() => {
   window.scrollTo(0, 0)
 }, [location.pathname])


  return (
    <div>
       <Navbar />
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/create' element={<Create />} />
         <Route path='/food/:id' element={<FoodDetails />} />
         <Route path='/foods/:id' element={<FoodCatalog />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/checkout' element={<Checkout />} />
         <Route path='/:title' element={<ListeRestaurant />} />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
