import React from 'react';
import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import productPhoto from '../../assets/iphone15promax.png';

export const CardImage = ({ label = '' }) => {
  return <img src={productPhoto} alt="f" className="img-iph" />;
};

CardImage.propTypes = {
  label: PropTypes.string,
};
