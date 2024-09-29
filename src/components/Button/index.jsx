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
  const btnSizes = {
    filter: 'w-full md:w-32',
    seeResults: 'w-36 md:w-5/12',
    mostPopular: 'w-full md:w-auto',
    order: 'w-36',
    form: 'w-full lg:w-40 lg:mt-8 py-4',
    filtersClose: 'w-full h-12',
    filtersResults: 'w-full mr-2',
  };

  const btnColors = {
    brightOutlined: `${className}  border border-secondary-bright text-secondary-bright hover:bg-secondary-light  focus:bg-secondary-light`,
    regular: ` ${className} py-4 text-white bg-main hover:border-main-regular `,
    dark: 'text-white bg-secondary-dark border-secondary-dark',
    darkOutlined:
      'border border-secondary-dark text-secondary-dark font-medium hover:border-secondary-light',
  };

  const btnSizeClasses = btnSizes[size];
  const btnColorClasses = btnColors[color];

  return (
    <button
      className={` button font-medium text-base ${btnSizeClasses} ${btnColorClasses} focus:border-1`}
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
