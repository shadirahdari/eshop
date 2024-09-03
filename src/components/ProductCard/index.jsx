import React from 'react';
import { Button } from '../Button/index.jsx';
import { MonthlyPayment } from '../MonthlyPayment/index.jsx';
import { StockStatus } from '../StockStatus/index.jsx';
import { CardImage } from '../Img/index.jsx';
import { ColorDots } from '../ColorDots/index.jsx';
import { OverLine } from '../OverLine/index.jsx';
import { Text } from '../Text/index.jsx';
import './style.css';

export const ProductCard = () => {
  return (
    <div className="es-product-card">
      <div className="es-product-card-main">
        <div className="es-product-card-top">
          <div className="es-product-card-top-left">
            <CardImage />
          </div>
          <div className="es-product-card-top-right">
            <OverLine company={'APPLE'} title={'iphone 15'} />
            <ColorDots />
          </div>
        </div>
        <div>
          {' '}
          <Text />
        </div>

        <div className="es-price-botton">
          {' '}
          <MonthlyPayment price={29} />
          <Button label="Order now ->" />
        </div>
      </div>

      <StockStatus in_stock={true} />
      {/* <StockStatus in_stock={false} /> */}
    </div>
  );
};
