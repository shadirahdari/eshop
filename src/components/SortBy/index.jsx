import React, {  useRef, useState } from 'react';
import PropTypes from 'prop-types';
import icons from '../../assets/svg/icons.svg';
import { useClickOutside } from '../../hooks/useClickOutside.jsx';


function SortBy() {
  const [selectedOption, setSelectedOption] = useState('Most popular');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { value: 'popular', label: 'Most popular' },
    { value: 'low-to-high', label: 'Price: lowest to highest' },
    { value: 'high-to-low', label: 'Price: highest to lowest' },
  ];

  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));
  const handleChevronDown = () => {
    const currentIndex = options.findIndex((option) => option.label === selectedOption);
    if (currentIndex < options.length - 1) {
      setSelectedOption(options[currentIndex + 1].label);
    }
  };

  const handleChevronUp = () => {
    const currentIndex = options.findIndex((option) => option.label === selectedOption);
    if (currentIndex > 0) {
      setSelectedOption(options[currentIndex - 1].label);
    }
  };

  return (
    <div className="w-full relative">
      <button
        type="button"
        className="flex justify-center items-center gap-1.5 px-4 h-[40px] font-bold font-medium text-nowrap button bg-sort  bg-no-repeat bg-sort-pos border border-secondary-bright text-secondary-bright hover:bg-secondary-light focus:bg-secondary-light"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        aria-label="Place your order"
        onClick={() => handleClick()}>
        <svg className="sorter-icon h-4 w-4">
          <use href={icons + '#sorter'}/>
        </svg>
        {selectedOption}
      </button>
      {isOpen && (
        <div
          className={`font-popup fixed md:absolute inset-x-0 bottom-0  md:-bottom-2 md:translate-y-full mt-2 w-screen md:w-72 focus:outline-none cursor-pointer`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          ref={dropdownRef}>
          <div className="flex justify-between h-9 bg-dropdown-header px-4 md:hidden">
            <div className="flex gap-4">
              <button onClick={()=> handleChevronDown() }>
                <svg className="h-5 w-5" aria-hidden="true">
                  <use href={icons +"#chevron-down"} />
                </svg>
              </button>
              <button onClick={() => handleChevronUp ()}>
                <svg className="h-5 w-5" aria-hidden="true">
                  <use href={icons + '#chevron-up'}/>
                </svg>
              </button>
            </div>
            <button
              className="text-white font-popup font-medium text-sm "
              onClick={() => handleClick(false)}>
              Done
            </button>
          </div>
          <div
            className="py-8 md:py-2 bg-gradient-to-b from-dropdown-gradient-1 to-dropdown-gradient-2 md:bg-none md:bg-dropdown-md md:rounded-md md:border md:border-dropdown-border"
            role="none">
            <button
              className="text-center text-sm text-[#474748] md:text-zinc-300 leading-4 font-[600] md:font-medium w-full  px-4 py-1 md:text-left "
              disabled>
              Choose...
            </button>
            {options.map((option) => (
              <button
                key={option.value}
                className={`${
                  selectedOption === option.label
                    ? 'bg-dropdown-option-selected text-white md:bg-inherit md:relative'
                    : 'text-white'
                } block text-center text-sm leading-4 font-normal w-full  px-4 py-1 md:text-left`}
                onClick={() => handleSelect(option.label)}>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SortBy;
SortBy.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
