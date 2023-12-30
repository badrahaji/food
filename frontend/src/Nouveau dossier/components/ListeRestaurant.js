// Fichier : listerestaurant.js
import { Link, Routes,Route } from "react-router-dom";
import {useParams} from "react-router-dom"
import React, { useState } from 'react';
import '../Style/ListeRestaurant.css';
import restaurantsData from "./restaurentData"
import Navb from "./Navbar"; 
// ... (code précédent)
const ListeRestaurant = () => {
  let {id}=useParams();
  const resto = restaurantsData.find((resto) => resto.id === parseInt(id));

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRestaurants = restaurantsData.filter((restaurant) =>
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
         
          <div key={resto.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <ul>
              {restaurant.menu.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{restaurant.position}</p>
            <p>Email: {restaurant.contact.email}</p>
            <p>Facebook: {restaurant.contact.facebook}</p>
            <p>Téléphone: {restaurant.contact.phone}</p>
            <Link to={`/services/restaurent/${id}`}> <button> Go to this resto </button>
        </Link>

          </div>
        ))}
      </section>
 {/* <Routes> */}

 {/* </Routes> */}
    </div>
  );
};
export default ListeRestaurant;

