import React from 'react';
import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const StockStatus = ({ inStock = false }) => {
  if (inStock)
    return (
      <div className="es-stock-status es-in-stock">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="10" height="10" rx="5" fill="#02562B" />
          <rect
            x="1"
            y="1"
            width="10"
            height="10"
            rx="5"
            stroke="#C5EFD9"
            strokeWidth="2"
          />
        </svg>
        In Stock
      </div>
    );
  else
    return (
      <div className="es-stock-status es-not-in-stock">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="10" height="10" rx="5" fill="#980233" />
          <rect
            x="1"
            y="1"
            width="10"
            height="10"
            rx="5"
            stroke="#FFDDE8"
            strokeWidth="2"
          />
        </svg>
        Not in stock
      </div>
    );
};

StockStatus.propTypes = {
  inStock: PropTypes.bool,
};
