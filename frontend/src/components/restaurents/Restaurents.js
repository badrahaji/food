import React from 'react'
import restaurantsData from "../restaurentData"
import { Link} from "react-router-dom";
const Restaurents = () => {
  return (
    <div>
    <section className="restaurant-list">
    {restaurantsData.map((restaurant) => (
      
      <div className="restaurant-card">
        <img src={restaurant.image} alt={restaurant.name} />
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
        <p>{restaurant.position}</p>
        <p>Email: {restaurant.contact.email}</p>
        <p>Téléphone: {restaurant.contact.phone}</p>
        <Link to={`/${restaurant.title}/restaurent/`}> <button> Go to this resto </button>
    </Link>

      </div>
    ))}
  </section>
  </div>
  )
}

export default Restaurents
