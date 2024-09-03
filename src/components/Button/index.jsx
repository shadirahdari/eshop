import React from 'react';
import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const Button = ({ label = '' }) => {
  return <button className="es-button">{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string,
};
