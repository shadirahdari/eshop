import React, { useContext } from 'react';
import { Button } from '../Button/index.jsx';
import { MonthlyPayment } from '../MonthlyPayment/index.jsx';
import { StockStatus } from '../StockStatus/index.jsx';
import { CardImage } from '../Img/index.jsx';
import { ColorDots } from '../ColorDots/index.jsx';
import { OverLine } from '../OverLine/index.jsx';
import { Text } from '../Text/index.jsx';
import { ModalContext } from '../../store/modal-context.jsx';
import PropTypes from 'prop-types';
import './style.css';
import icons from '../../assets/svg/icons.svg';

export const ProductCard = ({ product }) => {
  const { openModal } = useContext(ModalContext);
  const imageUrl = (productImg) => {
    return `https://res.cloudinary.com/dewhrjfex/image/upload/${productImg}`;
  };
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
          <Button
            className="flex justify-center items-center gap-1.5"
            size="order"
            color="regular"
            label="Order now"
            onClick={() => openModal()}>
            <span>Order</span>
            now{' '}
            <svg className="h-4 w-4 " aria-hidden="true">
              <use href={icons + '#arrow-right'} />
            </svg>
          </Button>
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
