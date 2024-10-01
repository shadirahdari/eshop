import React, {useContext, useRef, useState} from 'react';
import { useClickOutside } from '../../hooks/useClickOutside.jsx';
import Modal from 'react-modal';
import { ModalContext } from '../../store/modal-context.jsx';
import StatusOfOrder from "../StatusOfOrder/index.jsx";
import OrderFormContent from "../OrderForm/index.jsx";
import FormTitle from "../FormTitle/index.jsx";
import formBackground from '../../assets/images/form_background.png'

Modal.setAppElement('#root');

export function ModalOrder() {
    const modalRef = useRef(null);
    const { isModalOpen, closeModal, isFormSubmitted, setIsFormSubmitted } = useContext(ModalContext);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  useClickOutside(modalRef,  closeModal);

    const renderContent = () => {
      /*  if (isLoading) {
            return <p>Loading...</p>;
        }
*/
        if (!isFormSubmitted) {
            return (
                <OrderFormContent
                    onFormSubmit={(success) => {
                        setIsFormSubmitted(true);
                        setIsSuccess(success);
                        setIsLoading(false);
                    }}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                />
            );
        }

        return <StatusOfOrder isSuccess={isSuccess} closeModal={closeModal} onRetry={() => setIsFormSubmitted(false)} />
    };
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="bg-white w-full relative lg:max-w-4xl z-10 mx-auto transition-opacity duration-300 ease-in-out opacity-100"
      overlayClassName="flex justify-center fixed inset-0 top-0 lg:bg-slate-800 lg:bg-opacity-35 items-center transition-opacity duration-300 ease-in-out "
      role="dialog"
      aria-labelledby="modalTitle"
      >
      <div
        className="p-3 lg:p-0 container h-screen lg:h-3/5 flex justify-center"
        ref={modalRef}>
        <div className="hidden lg:block bg-cover bg-no-repeat w-72 overflow-hidden ">
          <img
            src={formBackground}
            alt="purple form background"
            loading="lazy"
          />
        </div>
        <div className="flex-1 p-1 lg:px-12 lg:py-2.5">
          <FormTitle closeModal={closeModal}/>
            {renderContent()}
        </div>
      </div>
    </Modal>
  );
}

export default ModalOrder;


