import { ErrorMessage, Field } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../assets/svg/icons.svg';

const TextInput = ({ label, name, type = 'text', errors, touched }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm mb-1.5 font-medium leading-5">
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
          <div
            className="text-border-error text-sm mt-1 flex items-center gap-1"
            aria-describedby={`${name} validation hint`}
            aria-live="polite">
            <svg className="sorter-icon h-5 w-5">
              <use href={icons + '#triangle-err'} />
            </svg>
            <span className="align-bottom">{msg}</span>
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};

export default TextInput;
TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.object,
  touched: PropTypes.object,
};
