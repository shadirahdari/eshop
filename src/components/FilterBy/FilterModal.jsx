import React from 'react';
import FilterContent from "./FilterContent.jsx";


const FilterModal = ({ show, close, }) => {
  return show && (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "#171717c2" }}>
      <div className="bg-white w-full h-full px-4 py-6 overflow-scroll">
        <h2 className="modal-title lg:hidden">Filter By</h2>
        <FilterContent close={close} />
      </div>
    </div>
  );
};

export default FilterModal;
