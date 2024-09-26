import React, { useState } from 'react';
import { Button } from '../Button/index.jsx';
import FilterModal from './FilterModal.jsx';
import icons from '../../assets/svg/icons.svg';

function FilterBy() {
  const [show_filters, set_show_filters] = useState(false)

  return (
    <>
      <Button onClick={() => set_show_filters(true)} color="brightOutlined" size="filter" className="flex justify-center items-center gap-1.5 h-[40px]" >
        <svg className="filter-icon h-4 w-4" aria-hidden="true">
          <use href={icons + '#filter'} />
        </svg>
        <span>Filter by</span>
      </Button>

      <FilterModal show={show_filters} update={(values) => console.log(values)} close={() => set_show_filters(false)} />
    </>
  );
}

export default FilterBy;
