import React from 'react';
import PropTypes from 'prop-types';
import productPhoto from '../../assets/images/iphone15promax.png';

export const CardImage = ({ label = '' }) => {
  return <img src={productPhoto} alt={label || 'product image'} className="h-[104px]" />;
};

CardImage.propTypes = {
  label: PropTypes.string,
};
