import { React, Fragment } from 'react';
import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const OverLine = ({ company, title }) => {
  return (
    <Fragment>
      <div>{company}</div>
      <span className="es-font">{title}</span>
    </Fragment>
  );
};

OverLine.propTypes = {
  company: PropTypes.string,
  title: PropTypes.string,
};
