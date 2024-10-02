import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const OverLine = ({ company, title }) => {
  return (
    <Fragment>
      <div>{company}</div>
      <span className="font-bold text-[20px] text-nowrap">{title}</span>
    </Fragment>
  );
};

OverLine.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string,
};
