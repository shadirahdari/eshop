import React from 'react';
import icons from "../../assets/svg/icons.svg"
import PropTypes from "prop-types";
const OrderTitle = ({closeModal}) => (
    <div className="flex justify-between mb-6 mt-1.5">
        <h2 id="modalTitle" className="font-bold text-3xl leading-9 lg:leading-tight">Finalise Your Order</h2>
        <button aria-label="Close form" className="button hover:scale-125" onClick={closeModal}>
            <svg className="close-icon h-8 w-8">
                <use href={icons + '#close'} />
            </svg>
        </button>
    </div>
);

OrderTitle.propTypes = {
    closeModal: PropTypes.func,
}
export default OrderTitle;
