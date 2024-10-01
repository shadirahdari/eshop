import React,{ createContext, useState } from 'react';
import PropTypes from 'prop-types';


 export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedProduct, setSelectedProduct] = useState(null);
 const [isFormSubmitted, setIsFormSubmitted] = useState(false);

 const openModal = (productId) => { setSelectedProduct(productId);
 setIsModalOpen(true);}
 const closeModal = () =>{ setIsModalOpen(false); setIsFormSubmitted(false)}

 return (
   <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, selectedProduct, isFormSubmitted, setIsFormSubmitted }}>
    {children}
   </ModalContext.Provider>
 );
};

ModalProvider.propTypes = {
 children: PropTypes.node,
}
