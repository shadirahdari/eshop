import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard/index.jsx';
// eslint-disable-next-line import/namespace,import/default,import/no-named-as-default,import/no-extraneous-dependencies,import/no-named-as-default-member
import axios from 'axios';
import "./style.css"

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://e-shop-backend-ag4c.onrender.com/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='es-products-list-container'>
      <h1 className='mb-4'>Products</h1>
      <div className='es-products-list'>
        {products.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};
