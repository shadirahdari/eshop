import React from 'react';
import {Button} from "../Button/index.jsx";
const ModalControls = ({ onClose }) => (
    <div className="mt-4 flex justify-end">
        <Button color="darkOutlined" size="filtersClose" onClick={onClose}>
            Close
        </Button>
    </div>
);

export default ModalControls;
