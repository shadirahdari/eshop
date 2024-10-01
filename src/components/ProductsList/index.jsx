import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard/index.jsx';
import axios from 'axios';
import { useProductContext } from '../../pages/Home/constants.jsx';

const PRICE_RANGE = [[0, Infinity], [0, 100], [100, 500], [500, 1000], [1000, 1500], [1500, 2000]]

const SORT_TYPE = {
  'popular': (a, b) => b.popularity_score - a.popularity_score,
  'low-to-high': (a, b) => a.price - b.price,
  'high-to-low': (a, b) => b.price - a.price,
}
export const ProductsList = () => {
  const { filters, products, setProducts, sortType } = useProductContext()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredProducts = products.filter(product => {
    const is_type = filters.Type.length === 0 || filters.Type.includes(product.product_type)
    const is_brand = filters.Brand.length === 0 || filters.Brand.includes(product.brand)


    const is_color = filters.Color.length === 0 ||
      product.color.split(",").find(color => filters.Color.includes(color.trim()))


    const [min, max] = PRICE_RANGE[filters.Price]

    const is_price = (product.price >= min && product.price < max)

    return is_type && is_brand && is_color && is_price
  })

  filteredProducts.sort(SORT_TYPE[sortType])

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
      {/*  <h1 className='mb-4'>Products</h1> */}
      <div className='flex flex-wrap gap-3'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};
