// Fichier : listerestaurant.js
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom"
import React, { useState } from 'react';
import '../Style/ListeRestaurant.css';
import platData from "./platData"
import Navb from "./Navbar"; 
// ... (code précédent)
const Restaurantmenu = () => {
  let {id}=useParams();
  const menu = platData.find((menu) => menu.id === parseInt(id));

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRestaurants = platData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="restaurant-page">
       <Navb/>
      <section className="search-section">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </section>
      <section className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
         
          <div key={menu.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <Link to={`/services/restaurent/${id}`}> <button> Go to this resto </button>
        </Link>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Restaurantmenu;

