import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Text = ({ text = '' }) => {
  return <div className="es-text">{text}</div>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired, // Ensure text is a string and required
};
