import React from 'react';
import { Button } from '../Button/index.jsx';
import icons from '../../assets/svg/icons.svg';

function Filters() {
  return (
    <Button color="brightOutlined" size="filter" className="py-2 flex justify-center items-center gap-1.5" >
      <svg className="filter-icon h-4 w-4" aria-hidden="true">
        <use href={icons + '#filter'}/>
      </svg>
      <span>Filter by</span>
    </Button>
  );
}

export default Filters;
