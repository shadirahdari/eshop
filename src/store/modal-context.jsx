import React,{ createContext, useState } from 'react';
import PropTypes from 'prop-types';


 export const ModalContext = createContext();
 
export const ModalProvider = ({ children }) => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => setIsModalOpen(true);
 const closeModal = () => setIsModalOpen(false);

 return (
   <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
    {children}
   </ModalContext.Provider>
 );
};

ModalProvider.propTypes = {
 children: PropTypes.node,
}
