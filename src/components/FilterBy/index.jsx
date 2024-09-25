import React, { useState } from 'react';
import { Button } from '../Button/index.jsx';
import FilterModal from './FilterModal.jsx';

function FilterBy() {
  const [show_filters, set_show_filters] = useState(false)

  return (
    <>
      <Button color="brightOutlined" size="filter" className="py-2" onClick={() => set_show_filters(true)}>
        <p className="px-4 relative bg-no-repeat bg-filter-pos md:bg-filter-pos-md">
          Filter by
        </p>
      </Button>

      <FilterModal show={show_filters} close={() => set_show_filters(false)} />
    </>
  );
}

export default FilterBy;
