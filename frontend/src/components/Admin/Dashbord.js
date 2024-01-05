import React, { useState , useEffect } from 'react';
import AdminMenu from './AdminMenu';
import classes from './dashboard.module.css'

// Mock data array to simulate fetched products with added attributes
const initialProducts = [];

const Dashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newProductData, setNewProductData] = useState({
    name: '',
    description: '',
    category: '',
    price: ''
  });
  const [editProductData, setEditProductData] = useState(null);

  // Replace with actual API call to fetch products
  useEffect(() => {
    // Fetch products from the API and update state
  }, []);

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProductData({ ...newProductData, [name]: value });
  };

  const createProduct = () => {
    // Perform API call to create product then update state
    // Mock update below
    const newProduct = {
      id: Date.now(),
      ...newProductData
    };
    setProducts([...products, newProduct]);
    setNewProductData({ name: '', description: '', category: '', price: '' }); // Reset form
  };

  const beginEditProduct = (product) => {
    setEditProductData(product); // Set editable product data
  };

  const handleEditProductChange = (e) => {
    const { name, value } = e.target;
    setEditProductData({ ...editProductData, [name]: value });
  };

  const saveProduct = () => {
    // Perform API call to update product then update state
    // Mock update below
    const updatedProducts = products.map((product) =>
      product.id === editProductData.id ? { ...editProductData } : product
    );
    setProducts(updatedProducts);
    setEditProductData(null); // Exit editing mode
  };

  const deleteProduct = (productId) => {
    // Perform API call to delete product then update state
    // Mock delete below
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className={classes.dashboad_container}>
      <div className={classes.dashboad_container_leftside}>

      <AdminMenu />
      </div>
      <div className={classes.dashboad_container_rightside}>
        
      </div>
      {/* <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          {editProductData && editProductData.id === product.id ? (
            <div>
              <input
                type="text"
                name="name"
                value={editProductData.name}
                onChange={handleEditProductChange}
              />
              <textarea
                name="description"
                value={editProductData.description}
                onChange={handleEditProductChange}
              />
              <input
                type="text"
                name="category"
                value={editProductData.category}
                onChange={handleEditProductChange}
              />
              <input
                type="text"
                name="price"
                value={editProductData.price}
                onChange={handleEditProductChange}
              />
              <button onClick={saveProduct}>Save</button>
              <button onClick={() => setEditProductData(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <button onClick={() => beginEditProduct(product)}>Edit</button>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}

      <h2>Create New Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newProductData.name}
        onChange={handleNewProductChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newProductData.description}
        onChange={handleNewProductChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={newProductData.category}
        onChange={handleNewProductChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={newProductData.price}
        onChange={handleNewProductChange}
      />
      <button onClick={createProduct}>Add Product</button> */}
    </div>
  );
};

export default Dashboard;