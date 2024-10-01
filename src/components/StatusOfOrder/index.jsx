import React from 'react';
import icons from "../../assets/svg/icons.svg";
import {Button} from "../Button/index.jsx";
import ModalControls from "../ModalControls/index.jsx";
import PropTypes from "prop-types";


const StatusOfOrder = ({ isSuccess, onRetry, closeModal }) => {

    const statusInfo = isSuccess
        ? {
            borderClass: 'border-border-success',
            textClass: 'text-border-success',
            icon: '#success',
            title: 'We’ve received your order',
            message: 'You’ll receive a call in the next 24 hours and finalise your order with one of our agents.',
        }
        : {
            borderClass: 'border-border-error',
            textClass: 'text-border-error',
            icon: '#error-filled',
            title: 'Your order hasn’t been placed',
            message: 'There’s been a technical error. Unfortunately, we haven’t received your order. Close this window and try placing your order again.',
        };

    const { borderClass, textClass, icon, title, message } = statusInfo;

    return (
        <>
        <div className={`py-4 px-4 mb-8 border-y-2 border-r-2 border-l-8 rounded-md ${borderClass}`}>
            <div className="flex gap-2 mb-2">
                <svg className="close-icon h-6 w-6">
                    <use href={icons + icon} />
                </svg>
                <p className={`text-base font-medium ${textClass}`}>{title}</p>
            </div>
            <p>{message}</p>

        </div>
    {!isSuccess && (
        <Button onClick={onRetry} color="dark" size="filtersClose">
            Fill the form again
        </Button>
    )}
    <ModalControls onClose={closeModal} />
        </>
    );
};
StatusOfOrder.propTypes = {
    isSuccess: PropTypes.bool,
    onRetry: PropTypes.func,
    closeModal: PropTypes.func,
}

export default StatusOfOrder;
