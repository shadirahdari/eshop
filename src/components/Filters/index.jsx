import React from 'react';
import { Button } from '../Button/index.jsx';

function Filters() {
  return (
    <Button color="brightOutlined" size="filter" className="py-2">
      <p className="px-4 relative bg-no-repeat bg-filter-pos md:bg-filter-pos-md">
        Filter by
      </p>
    </Button>
  );
}

export default Filters;
