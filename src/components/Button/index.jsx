import React from 'react';
import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const Button = ({ size, color, type = 'button', children }) => {
  const btnSizes = {
    filter: 'px-6 py-2 w-40 md:w-32',
    seeResults: 'px-6 py-3 w-36 md:w-5/12',
    mostPopular: 'px-6 py-2 w-40',
    order: 'px-6 py-3 w-36',
    form: 'px-6 py-3 w-full lg:w-40',
  };

  const btnColors = {
    brightOutlined:
      'border border-secondary-bright text-secondary-bright hover:bg-secondary-light ',
    regular: 'text-white bg-main-regular text-white hover:border-main-regular ',
    dark: 'text-white font-medium bg-secondary-dark hover:border-secondary-light ',
    darkOutlined:
      'border border-secondary-dark text-secondary-dark font-medium hover:border-secondary-light',
  };
  const btnSizeClasses = btnSizes[size];
  const btnColorClasses = btnColors[color];

  return (
    <button
      className={`font-medium rounded-full text-base ${btnSizeClasses} ${btnColorClasses}`}
      type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
};
