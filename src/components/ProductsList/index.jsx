import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard/index.jsx';
// eslint-disable-next-line import/namespace,import/default,import/no-named-as-default,import/no-extraneous-dependencies,import/no-named-as-default-member
import axios from 'axios';
import { useProductContext } from '../../pages/Home/constants.jsx';

export const ProductsList = () => {
  const { filters, products, setProducts } = useProductContext()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const filteredProducts = products.filter(product => {
    const is_type = filters.Type.length === 0 || filters.Type.includes(product.product_type)
    const is_brand = filters.Brand.length === 0 || filters.Brand.includes(product.brand)
    return is_type && is_brand
  })

  console.log(filters, products)

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
    <div className='mx-5 my-5'>
      <h1 className='mb-4'>Products</h1>
      <div className='flex flex-wrap gap-2'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};
