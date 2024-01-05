const ProductsDetails = ({ description, category, price, reviews }) => {
    return (
      <div>
        <h2>Product Details</h2>
  
        {/* Product Description */}
        <section>
          <h3>Description</h3>
          <p>{description}</p>
        </section>
  
        {/* Product Category */}
        <section>
          <h3>Category</h3>
          <p>{category}</p>
        </section>
  
        {/* Product Price */}
        <section>
          <h3>Price</h3>
          <p style={{ color: 'green' }}>${price}</p>
        </section>
  
        {/* Product Reviews */}
        <section>
          <h3>Reviews</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  };
  
  export default ProductsDetails;
