import React from 'react';
import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const MonthlyPayment = ({ price = 0 }) => {
  return <div className="es-monthly-payment">{price} Eur/Month</div>;
};

MonthlyPayment.propTypes = {
  price: PropTypes.number,
};
