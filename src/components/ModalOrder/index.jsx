import React, { useContext, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import formBackground from '../../assets/images/form_background.png';
import icons from '../../assets/svg/icons.svg';
import { useClickOutside } from '../../hooks/useClickOutside.jsx';
import TextInput from '../Input/index.jsx';
import { Button } from '../Button/index.jsx';
import Modal from 'react-modal';
import { ModalContext } from '../../store/modal-context.jsx';

Modal.setAppElement('#root');

export function ModalOrder() {
  const modalRef = useRef(null);
  const { isModalOpen, closeModal } = useContext(ModalContext);
  const { userInfo, setUserInfo } = useState({});

  const validationSchema = object({
    fullName: string()
      .min(2, 'Must be  at least 2 characters')
      .max(30, 'Must be 30 characters or less')
      .required('Fill in the required field'),
    email: string()
      .email('Invalid email address')
      .required('Fill in the required field'),
    phone: string()
      .matches(
        /^\+\d{1,3}\d{7,15}$/,
        'Phone number should start from + and contain to 15 digits',
      )
      .required('Fill in the required field'),
  });

  useClickOutside(modalRef, () => closeModal());

  const handleClick = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="bg-white w-full relative lg:max-w-4xl z-10 mx-auto transition-opacity duration-300 ease-in-out opacity-100"
      overlayClassName="flex justify-center fixed inset-0 top-0 lg:bg-slate-800 lg:bg-opacity-35 items-center transition-opacity duration-300 ease-in-out ">
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
          <div className="flex justify-between mb-6 mt-1.5">
            <h2 className="font-bold text-3xl mt-4 leading-9 lg:leading-tight">
              Finalise Your Order
            </h2>
            <button
              aria-label="Close form"
              className="button relative -top-8 md:static lg:relative lg:-top-4 lg:left-7 hover:scale-125"
              onClick={() => handleClick()}>
              <svg className="close-icon h-8 w-8">
                <use href={icons + '#close'} />
              </svg>
            </button>
          </div>
          <p className="text-left font-normal text-base lg:text-lg mb-5 leading-6">
            Please leave your contact details below. We’ll contact you very
            shortly to finalise your order.
          </p>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phone: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                console.log(values);
                closeModal();
              }, 1000);
            }}>
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-4">
                <TextInput
                  label="Name and Surname"
                  name="fullName"
                  placeholder="Enter your name"
                  id="fullName"
                />
                <TextInput
                  label="Email address"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                />
                <TextInput
                  label="Phone number"
                  name="phone"
                  placeholder="Enter your phone"
                  id="phone"
                />
                <Button
                  type="submit"
                  color={'dark'}
                  size={'form'}
                  className="hover:scale-[1.02] "
                  aria-label="Place your order"
                  /* onClick={() => handleSubmit()} */
                >
                  Place an order
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
}
