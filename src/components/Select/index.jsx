import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/svg/icons.svg';

function Select() {
  const [selectedOption, setSelectedOption] = useState('Most popular');
  const [popUp, setPopUp] = useState(false);
  const options = [
    { value: 'popular', label: 'Most popular' },
    { value: 'low-to-high', label: 'Price: lowest to highest' },
    { value: 'high-to-low', label: 'Price: highest to lowest' },
  ];

  const handleSelect = (value) => {
    setSelectedOption(value);
  };
  const handleClick = (value) => {
    setPopUp(value);
  };
  const isVisible = popUp ? 'block' : 'hidden';
  return (
    <div className="w-full inline-block">
      <button
        type="button"
        className="py-2 pl-4 pr-1.5 w-full md:w-40 inline-flex font-medium button text-justify-between bg-sort relative bg-no-repeat bg-sort-pos border border-secondary-bright text-secondary-bright hover:bg-secondary-light "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => handleClick(true)}>
        {selectedOption}
      </button>

      {/* Dropdown */}
      <div
        className={`${isVisible} fixed inset-x-0 bottom-0 mt-2 w-screen rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1">
        <div className="flex justify-between h-9 bg-dropdown-header px-4">
          <div className="flex gap-4">
            <button className="bg-amber-200">
              <svg width="24" height="24" fill="white" aria-hidden="true">
                <use href="#checkbox" />
              </svg>
            </button>
            <button className="bg-amber-200">
              <svg width="24" height="24">
                <use href="#chevron-up" />
              </svg>
            </button>
          </div>
          <button
            className="text-white font-semibold text-sm "
            onClick={() => handleClick(false)}>
            Done
          </button>
        </div>
        <div className="py-1" role="none">
          {options.map((option) => (
            <button
              key={option.value}
              className={`${
                selectedOption === option.label
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-700'
              } block w-full text-left px-4 py-2 text-sm`}
              onClick={() => handleSelect(option.label)}>
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
Select.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
