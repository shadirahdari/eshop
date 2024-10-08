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
  disabled = false,
}) => {
  const btnSizes = {
    filter: 'w-full h-10 md:w-32',
    seeResults: 'w-36 h-10 md:w-5/12',
    mostPopular: 'w-full h-10 md:w-auto',
    order: 'w-36 h-12',
    form: 'w-full h-12 lg:w-40 lg:mt-8',
    filtersClose: 'w-full h-12',
    filtersResults: 'w-full mr-2 h-12',
  };

  const btnColors = {
    brightOutlined: `${className} font-bold border border-secondary-bright text-secondary-bright hover:bg-secondary-light  focus:bg-secondary-light`,
    regular: ` ${className} py-4 text-white bg-main hover:border-main-regular `,
    dark: `${className} text-white bg-secondary-dark border-secondary-dark`,
    darkOutlined:
      'border border-secondary-dark text-secondary-dark font-medium hover:border-2',
  };

  const btnSizeClasses = btnSizes[size];
  const btnColorClasses = btnColors[color];
const disabledStyle = disabled ? 'opacity-50' : 'opacity-100';
  return (
    <button
      className={`button font-medium text-base ${className} ${disabledStyle} ${btnSizeClasses} ${btnColorClasses} focus:border-1`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
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
  disabled: PropTypes.bool,
};
