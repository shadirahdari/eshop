import React from 'react';
import PropTypes from 'prop-types';

export const CardImage = ({ photo = '' }) => {
  return <img src={photo} alt={'product image'} className="h-[104px]" />;
};

CardImage.propTypes = {
  photo: PropTypes.string,
};
