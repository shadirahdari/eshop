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
import icons from '../../assets/svg/icons.svg';

const imageUrl = (productImg) => {
  return `https://res.cloudinary.com/dewhrjfex/image/upload/${productImg}`;
};

export const ProductCard = ({ product }) => {
  const { openModal } = useContext(ModalContext);
  return (
    <div className="w-[336px] rounded-md bg-gray-100 border border-gray-300 flex flex-col">
      <div className="flex flex-col gap-6 p-6 flex-1">
        <div className="flex">
          <div className="flex-1 flex justify-center">
            <CardImage photo={imageUrl(product.picture)} />
          </div>
          <div className="flex flex-col flex-1">
            <OverLine company={product.brand} title={product.title} />
            <ColorDots colors={product.color} />
          </div>
        </div>
        <Text text={product.shortDescription} />
        <div className="flex flex-row w-[295px] h-[48px] gap-6 items-center">
          <MonthlyPayment price={product.price} />
          <Button
            className="flex justify-center items-center gap-1.5"
            size="order"
            color="dark"
            label="Order now"
            onClick={() => openModal(product.product_id)} >
            <span>Order</span> now{' '}
            <svg className="h-4 w-4" >
              <use href={icons + '#arrow-right'} />
            </svg>
          </Button>
        </div>
      </div>
      <StockStatus inStock={product.stockAmount > 0} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    product_id:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stockAmount: PropTypes.number.isRequired,
  }).isRequired,
};
