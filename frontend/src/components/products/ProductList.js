 // Import the existing ProductDetails component

import ProductsDetails from "./ProductsDetails";


// Define a ProductList component
const ProductList = () => {
  const products = [
    {
      description: 'This is an amazing gadget!',
      category: 'Gadgets',
      price: '99.99',
      reviews: ['I love this!', 'Best purchase ever!']
    },
    {
      description: 'A great tool for your kitchen.',
      category: 'Kitchenware',
      price: '49.99',
      reviews: ['Makes cooking easy.', 'High quality and durable.']
    },
    // Add more products as needed
  ];
  return (
    <div>
      <h2>Product List</h2>
      {/* Iterate over the products array to render each ProductDetails */}
      {products.map((product, index) => (
        <ProductsDetails
          key={index}
          description={product.description}
          category={product.category}
          price={product.price}
          reviews={product.reviews}
        />
      ))}
    </div>
  );
};

export default ProductList;