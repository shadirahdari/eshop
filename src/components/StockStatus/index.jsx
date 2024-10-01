import React from 'react';
import PropTypes from 'prop-types';

export const StockStatus = ({ inStock = false }) => {
  return (
    <div className={`flex items-center justify-center gap-4 h-[40px] py-2 border-t ${inStock ? 'border-t-[#00000029] opacity-100 text-[#02562B]' : 'border-t-[#00000029] opacity-100 text-[#980233]'}`}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="10" height="10" rx="5" fill={inStock ? "#02562B" : "#980233"} />
        <rect
          x="1"
          y="1"
          width="10"
          height="10"
          rx="5"
          stroke={inStock ? "#C5EFD9" : "#FFDDE8"}
          strokeWidth="2"
        />
      </svg>
      {inStock ? 'In Stock' : 'Not in stock'}
    </div>
  );
};

StockStatus.propTypes = {
  inStock: PropTypes.bool,
};

