import React, { useRef, useState } from 'react';
// eslint-disable-next-line import/namespace
import { Formik, Form, Field, ErrorMessage } from 'formik';
// eslint-disable-next-line import/namespace
import * as Yup from 'yup';
import formBackground from '../../assets/images/form_background.png';
// eslint-disable-next-line import/namespace
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button/index.jsx';
import { useClickOutside } from '../../hooks/useClickOutside.jsx';

function LeadForm() {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Fill in the required field'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Fill in the required field'),
    phone: Yup.string().required('Fill in the required field'),
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
              <img src={formBackground} alt="purple form background" />
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
                  <FontAwesomeIcon icon={faXmark} />
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
                {({ errors, touched }) => (
                  <Form className="flex flex-col gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm mb-1.5 font-medium leading-5">
                        * Name and Surname
                      </label>
                      <Field
                        id="name"
                        name="name"
                        className="w-full px-3 pt-2 pb-3 border rounded-sm border-neutral-500 focus:outline-none focus:ring-1 focus:ring-main"
                      />
                      <ErrorMessage name="name">
                        {(msg) => (
                          <div className="text-border-error text-sm mt-1 flex items-center gap-2">
                            <FontAwesomeIcon icon={faTriangleExclamation} />{' '}
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-1.5 font-medium leading-5">
                        * Email address
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-3 pt-2 pb-3 border rounded-sm border-neutral-500 focus:outline-none focus:ring-1 focus:ring-main invalid:border-border-error"
                      />
                      <ErrorMessage name="email">
                        {(msg) => (
                          <div className="text-border-error text-sm mt-1 flex items-center gap-2">
                            <FontAwesomeIcon icon={faTriangleExclamation} />{' '}
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm mb-1.5 font-medium leading-5">
                        * Phone number
                      </label>
                      <Field
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full px-3 pt-2 pb-3  border rounded-sm border-neutral-500 focus:outline-none focus:ring-1 focus:ring-main"
                      />
                      <ErrorMessage name="phone">
                        {(msg) => (
                          <div className="text-border-error text-sm mt-1 flex items-center gap-2">
                            <FontAwesomeIcon icon={faTriangleExclamation} />{' '}
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="mt-6">
                      <Button type="submit" color={'dark'} size={'form'}>
                        Place an order
                      </Button>
                    </div>
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

export default LeadForm;
