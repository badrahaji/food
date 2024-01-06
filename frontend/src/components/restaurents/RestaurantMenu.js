import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './restaurent.css';
import FoodDetails from '../foodDetails/FoodDetails';

const RestaurantMenu = () => {
  const [products, setProducts] = useState([]);

  // Function to fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/product');
      setProducts(response.data);
    } catch (error) {
      console.error('Fetching products failed:', error);
    }
  };

  // Use useEffect to fetch products when the component is mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='container'>
      <h1>Restaurant Menu</h1>
      <div className='restaurent-products'>
        {products.length > 0 ? (
          products.map((product) => (
            <FoodDetails key={product.id} {...product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
