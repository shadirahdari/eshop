import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

export const Button = ({
  size,
  color = 'brightOutlined',
  type = 'button',
  onClick,
  children,
  className = '',
}) => {
  const btnColors = {
    brightOutlined: `h-[40px] border border-secondary-bright text-secondary-bright hover:bg-secondary-light  focus:bg-secondary-light`,
    regular:
      'py-4 text-white bg-main-regular text-white hover:border-main-regular ',
    dark: 'h-[40px] text-white bg-secondary-dark  border-secondary-dark',
    darkOutlined:
      'border border-secondary-dark text-secondary-dark font-medium hover:border-secondary-light',
  };

  const btnSizes = {
    filter: 'w-full md:w-44',
    seeResults: 'w-36 md:w-5/12',
    mostPopular: 'w-70',
    order: 'w-36',
    form: 'w-full lg:w-40 lg:mt-8',
  };

  const btnSizeClasses = btnSizes[size];
  const btnColorClasses = btnColors[color];

  return (
    <button
      className={`pl-8 pr-8 button font-medium text-base hover:scale-105 ${className} ${btnSizeClasses} ${btnColorClasses} focus:border-2`}
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
