
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Create from './components/Admin/Create';
import FoodDetails from './components/foodDetails/FoodDetails';
import FoodCatalog from './components/foodCatalog/FoodCatalog';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import ListeRestaurant from './components/Services/ListeRestaurant';
import Restaurents from './components/restaurents/Restaurents';
import Patesseries from './components/pattesserie/Patesseries';
import ProductsDetails from './components/products/ProductsDetails';
import Dashboard from './components/Admin/Dashbord';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminRoute from './components/Routes/AdminRoute';
import Users from './components/Admin/Users';

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
         <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-product" element={<Create />} />
          <Route path="admin/users" element={<Users/>} />
        </Route>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/food/:id' element={<FoodDetails />} />
         <Route path='/foods/:id' element={<FoodCatalog />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/checkout' element={<Checkout />} />
         <Route path='/Restaurents' element={<Restaurents/>}/>
         <Route path='/Patessiries' element={<Patesseries/>} />
         <Route path='/:title' element={<ListeRestaurant />} />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
