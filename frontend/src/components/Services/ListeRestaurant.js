// Fichier : listerestaurant.js
import { Link, Routes,Route } from "react-router-dom";
import {useParams} from "react-router-dom"
import React, { useState } from 'react';
import './ListeRestaurant.css';
import restaurantsData from "../restaurentData"
import services from '../ServicesData';
import ProductList from "../products/ProductList";
// ... (code précédent)
const ListeRestaurant = () => {
  let {title}=useParams('');
  const resto = services.find((resto) => resto.title === title);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredRestaurants = restaurantsData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="restaurant-page">
       <div style={{marginTop:"50px"}}>
      <section className="search-section">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={searchTerm}
          onChange={handleSearch}
          />
      </section>
        </div>
      <section className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          
          <div key={resto.title} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <p>{restaurant.position}</p>
            <p>Email: {restaurant.contact.email}</p>
            <p>Téléphone: {restaurant.contact.phone}</p>
            <Link to={`/Restaurents/restaurent1/`}> <button> Go to this resto </button>
        </Link>

          </div>
        ))}
      </section>
      <Routes>
        <Route path="/Restaurants/:restaurantId" element={<ProductList/>} />
      </Routes>
    </div>
  );
};
export default ListeRestaurant;
