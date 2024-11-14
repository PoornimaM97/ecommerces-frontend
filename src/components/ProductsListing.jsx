import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using axios for API requests
import { listProducts } from '../services/ProductsServices';
import '../styles/ProductsListing.css'; // Optional CSS for styling

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchProducts = async () => {
      try {
        listProducts().then((response)=>{
        setProducts(response.data);
        setLoading(false);
        }).catch(error=>{
          console.log(error)
        })} catch (err) {
        setErrors('Failed to fetch products');
        setLoading(false);
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (errors) return <p>{errors}</p>;

  return (
    <div className="product-listing">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img className="product-card img" src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
