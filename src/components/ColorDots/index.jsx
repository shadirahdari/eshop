import React from 'react';

export const ColorDots = ({ color = "" }) => {

  return (
    <div className="flex gap-2 mt-7 items-center text-sm">
      <span title={color} style={{ backgroundColor: color }} className={`w-3 h-3 rounded-full border border-[#00000054]`} />
      {color}
    </div>
  );
};
