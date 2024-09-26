import React from 'react';
import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const btnSizes = {
  filter: 'w-full md:w-32',
  seeResults: 'w-36 md:w-5/12',
  mostPopular: 'w-40',
  order: 'w-36',
  form: 'w-full lg:w-40',
};

const btnColors = {
  brightOutlined: `border border-secondary-bright text-secondary-bright hover:bg-secondary-light  focus:bg-secondary-light`,
  regular:
    'py-4 text-white bg-main-regular text-white hover:border-main-regular ',
  dark: 'text-white bg-secondary-dark  border-secondary-dark',
  darkOutlined:
    'border border-secondary-dark text-secondary-dark font-medium hover:border-secondary-light',
};

export const Button = ({
  size,
  color = "brightOutlined",
  type = 'button',
  onClick,
  children,
  className = ""
}) => {
  const btnSizeClasses = btnSizes[size];
  const btnColorClasses = btnColors[color];

  return (
    <button
      className={`px-2  button font-medium text-base hover:scale-105 ${className} ${btnSizeClasses} ${btnColorClasses} focus:border-2`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};


