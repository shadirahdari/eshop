import React,{ createContext, useState } from 'react';
import PropTypes from 'prop-types';


 export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedProduct, setSelectedProduct] = useState(null);

 const openModal = (productId) => { setSelectedProduct(productId);
 setIsModalOpen(true);}
 const closeModal = () =>{setSelectedProduct(null); setIsModalOpen(false);}

 return (
   <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, selectedProduct }}>
    {children}
   </ModalContext.Provider>
 );
};

ModalProvider.propTypes = {
 children: PropTypes.node,
}
