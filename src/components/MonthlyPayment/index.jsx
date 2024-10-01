import React from 'react';
import PropTypes from 'prop-types';

export const MonthlyPayment = ({ price = 0 }) => {
  return (
    <div className="font-helvetica font-bold text-[16px] leading-[24px] text-left w-[143px] h-[24px] gap-1  flex flex-1">
      {Math.ceil(price / 12)} Eur/Month
    </div>
  );
};

MonthlyPayment.propTypes = {
  price: PropTypes.number,
};
