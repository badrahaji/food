import React from 'react';

const FoodProduct = ({ name, description, price }) => {
  return (
    <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p> {/* Assuming price is a float */}
    </div>
  );
};

export default FoodProduct;