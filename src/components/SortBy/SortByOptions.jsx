import React from 'react';
import {Checkbox} from "../Checkbox/index.jsx";
import {useSortContext} from "../../store/sortby-context.jsx";
const SortByOptions = ({ sortType, handleSelect, isDesktop }) => {
    const { options } = useSortContext();
    return (
        <>
            {options.map((option, index) => (
                <div key={option.value}>
                    {isDesktop ? (
                        <Checkbox
                            radio={true}
                            name={option.label}
                            label={option.label}
                            checked={sortType === option.value}
                            onChange={() => handleSelect(option.value)}
                            id={`${option.label}-${index}`}
                        />
                    ) : (
                        <button
                            className={`${
                                sortType === option.value
                                    ? 'bg-dropdown-option-selected text-white md:bg-inherit md:relative'
                                    : 'text-white'
                            } block text-center text-sm leading-4 font-normal w-full px-4 py-1 md:text-left`}
                            onClick={() => handleSelect(option.value)}
                        >
                            <span>{option.label}</span>
                        </button>
                    )}
                </div>
            ))}
        </>
    );
};

export default SortByOptions;


/* <button
                    key={option.value}
                    className={`${sortType === option.value
                        ? 'bg-dropdown-option-selected text-white md:bg-inherit md:relative'
                        : 'text-white'
                    } block text-center text-sm leading-4 font-normal w-full  px-4 py-1 md:text-left`}
                    onClick={() => handleSelect(option.value)}>
                <span>{option.label}</span>
            </button> */
