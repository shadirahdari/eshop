import React from 'react';
import { Button } from '../Button/index.jsx';
import { MonthlyPayment } from '../MonthlyPayment/index.jsx';
import { StockStatus } from '../StockStatus/index.jsx';
import { CardImage } from '../Img/index.jsx';
import { ColorDots } from '../ColorDots/index.jsx';
import { OverLine } from '../OverLine/index.jsx';
import { Text } from '../Text/index.jsx';
import PropTypes from 'prop-types';
import './style.css';

export const ProductCard = ({ product }) => {
  return (
    <div className="es-product-card">
      <div className="es-product-card-main">
        <div className="es-product-card-top">
          <div className="es-product-card-top-left">
            <CardImage />
          </div>
          <div className="es-product-card-top-right">
            <OverLine company={'APPLE'} title={product.name} />
            <ColorDots />
          </div>
        </div>
        <div>
          {' '}
          <Text text={product.description} />
        </div>

        <div className="es-price-botton">
          {' '}
          <MonthlyPayment price={product.price} />
          <Button label="Order now ->" />
        </div>
      </div>
      <StockStatus inStock={product.isInstock > 0} />
      {/* <StockStatus inStock={false} /> */}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isInstock: PropTypes.number.isRequired,
  }).isRequired,
};
