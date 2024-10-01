import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import icons from '../../assets/svg/icons.svg';
import { useClickOutside } from '../../hooks/useClickOutside.jsx';
import { Button } from '../Button/index.jsx';
import { useProductContext } from '../../pages/Home/constants.jsx';
import SortByOptions from "./SortByOptions.jsx";
import {useSortContext} from "../../store/sortby-context.jsx";

function SortBy() {
  const { sortType, setSortType } = useProductContext()
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { options } = useSortContext();
  const selectedOption = options.find(x => x.value === sortType);
  const handleSelect = (value) => {
    setSortType(value);
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));
  const handleChevronDown = () => {
    const currentIndex = options.findIndex(
      (option) => option.label === sortType,
    );
    if (currentIndex < options.length - 1) {
      setSortType(options[currentIndex + 1].label);
    }
  };

  const handleChevronUp = () => {
    const currentIndex = options.findIndex(
      (option) => option.label === sortType,
    );
    if (currentIndex > 0) {
      setSortType(options[currentIndex - 1].label);
    }
  };

  return (
    <div className="w-full relative">
      <Button
        type="button"
        size="mostPopular"
        className="py-2 px-5 flex justify-center items-center gap-1.5 text-nowrap"
        id="sorting-button"
        aria-expanded="true"
        aria-haspopup="true"
        aria-label="Choose sorting for procuts"
        onClick={() => handleClick()}>
        <svg className="sorter-icon h-4 w-4">
          <use href={icons + '#sorter'} />
        </svg>
        {/*{options.find(x => x.value === sortType).label}*/}
        {selectedOption ? selectedOption.label : 'popular'}
      </Button>
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
              <button onClick={() => handleChevronDown()}>
                <svg className="h-5 w-5" aria-hidden="true">
                  <use href={icons + '#chevron-down'} />
                </svg>
              </button>
              <button onClick={() => handleChevronUp()}>
                <svg className="h-5 w-5" aria-hidden="true">
                  <use href={icons + '#chevron-up'} />
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
            <SortByOptions options={options} handleSelect={handleSelect} sortType={sortType} />
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
