import React, { createContext, useContext, useState } from 'react';

const SortContext = createContext();

export const useSortContext = () => useContext(SortContext);

export const SortProvider = ({ children }) => {
    const [options, setOptions] = useState([
        { value: 'popular', label: 'Most Popular' },
        { value: 'low-to-high', label: 'Price: lowest to highest' },
        { value: 'high-to-low', label: 'Price: highest to lowest' },
    ]);

    return (
        <SortContext.Provider value={{ options, setOptions }}>
            {children}
        </SortContext.Provider>
    );
};
