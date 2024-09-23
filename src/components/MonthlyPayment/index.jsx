import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const MonthlyPayment = ({ price = 0 }) => {
  return (
    <div className="font-helvetica font-bold text-[16px] leading-[24px] text-left w-[143px] h-[24px] gap-1  flex flex-1">
      {price} Eur/Month
    </div>
  );
};

MonthlyPayment.propTypes = {
  price: PropTypes.number,
};
