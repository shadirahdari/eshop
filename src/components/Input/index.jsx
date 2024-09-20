// eslint-disable-next-line import/namespace
import { ErrorMessage, Field } from 'formik';
// eslint-disable-next-line import/namespace
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, name, type = 'text' }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm mb-1.5 font-medium leading-5">
        * {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        aria-required="true"
        required
        className="w-full px-3 pt-2 pb-3 border rounded-sm border-neutral-500 focus:outline-none focus:ring-1 focus:ring-main"
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <div className="text-border-error text-sm mt-1 flex items-center gap-2" aria-describedby={`${name} validation hint`} aria-live="polite">
            <FontAwesomeIcon icon={faTriangleExclamation} /> {msg}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};


export default TextInput
TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type:PropTypes.string,
}
