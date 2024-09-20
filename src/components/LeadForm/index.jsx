import React, { useRef, useState } from 'react';
// eslint-disable-next-line import/namespace
import { Formik, Form} from 'formik';
// eslint-disable-next-line import/namespace
import {object, string} from 'yup';
import formBackground from '../../assets/images/form_background.png';
// eslint-disable-next-line import/namespace
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from '../../hooks/useClickOutside.jsx';
import TextInput from '../Input/index.jsx';
import { Button } from '../Button/index.jsx';


export function LeadForm() {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  const validationSchema = object({
    name: string()
      .min(2, 'Must be  at least 2 characters')
      .max(30, 'Must be 30 characters or less')
      .required('Fill in the required field'),
    email: string()
      .email('Invalid email address')
      .required('Fill in the required field'),
    phone: string()
      .matches(/^\+\d{1,3}\d{7,15}$/, 'Phone number should start from + and contain to 15 digits')
      .required('Fill in the required field'),
  });

  useClickOutside(dropdownRef, () => setIsOpen(false));
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="container flex justify-center min-h-screen">
          <div className="p-3 w-full lg:max-w-4xl flex flex-col lg:flex-row">
              <div
                className="hidden lg:block bg-cover bg-no-repeat w-72 h-full"
                style={{ backgroundImage: 'url("your-image-url.jpg")' }}>
                <img src={formBackground} alt="purple form background"/>
              </div>
              <div className="flex-1 p-1 lg:px-12 lg:py-2.5">
                <div className="flex justify-between mb-6 mt-1.5">
                  <h1 className="font-bold text-3xl leading-9 lg:leading-tight">
                    Finalise Your Order
                  </h1>
                  <button
                    aria-label="Close form"
                    className="button text-3xl relative -top-3 md:static lg:relative lg:-top-4 hover:scale-125"
                    onClick={() => handleClick()}>
                    <FontAwesomeIcon icon={faXmark}/>
                  </button>
                </div>
                <p className="text-left font-normal text-base lg:text-lg mb-5 leading-6">
                  Please leave your contact details below. We’ll contact you very
                  shortly to finalise your order.
                </p>

                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}>
                  {({
                    errors,
                    touched
                  }) => (
                    <Form className="flex flex-col gap-4">
                      <TextInput label="Name and Surname" name="name" placeholder="Enter your name" id="name" />
                      <TextInput label="Email address" name="email" placeholder="Enter your email" id="email" />
                      <TextInput label="Phone number" name="phone" placeholder="Enter your phone" id="phone" />
                      <Button type="submit" color={'dark'} size={'form'} aria-label="Place your order">
                        Place an order
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }


