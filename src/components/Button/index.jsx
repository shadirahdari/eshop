import React from 'react';
import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const Button = ({
  size,
  color,
  type = 'button',
  className,
  onClick,
  children,
}) => {
  const btnSizes = {
    filter: 'w-full md:w-32',
    seeResults: 'w-36 md:w-5/12',
    mostPopular: 'w-40',
    order: 'w-36',
    form: 'w-full lg:w-40',
  };

  const btnColors = {
    brightOutlined: `${className}  border border-secondary-bright text-secondary-bright hover:bg-secondary-light  focus:bg-secondary-light`,
    regular:
      'py-4 text-white bg-main-regular text-white hover:border-main-regular ',
    dark: 'py-4 text-white bg-secondary-dark hover:scale-105 border-secondary-dark',
    darkOutlined:
      'border border-secondary-dark text-secondary-dark font-medium hover:border-secondary-light',
  };
  const btnSizeClasses = btnSizes[size];
  const btnColorClasses = btnColors[color];

  return (
    <button
      className={`button font-medium text-base ${btnSizeClasses} ${btnColorClasses} focus:border-2` }
      type={type}
      role="button"
      onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
