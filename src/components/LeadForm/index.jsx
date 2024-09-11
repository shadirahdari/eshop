import React from 'react';
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

const LeadForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Fill in the required field'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Fill in the required field'),
    phone: Yup.string().required('Fill in the required field'),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-md w-full max-w-md md:max-w-lg lg:max-w-2xl flex flex-col lg:flex-row">
        <div
          className="hidden lg:block bg-cover bg-no-repeat w-72 h-full"
          style={{ backgroundImage: 'url("your-image-url.jpg")' }}>
          <img src={formBackground} alt="purple form background" />
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-left font-bold text-2xl lg:text-4xl leading-9 lg:leading-tight">
              Finalise Your Order
            </h1>
            <button
              aria-label="Close form"
              className="text-gray-500 hover:text-gray-800"></button>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <p className="text-left font-normal text-base lg:text-lg mb-4 leading-6">
            Please fill in the form below to place your order.
          </p>

          <Formik
            initialValues={{ name: '', email: '', phone: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-5">
                    * Name and Surname
                  </label>
                  <Field
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  />
                  <ErrorMessage name="name">
                    {(msg) => (
                      <div className="text-red-500 text-sm mt-1 flex items-center gap-2">
                        <FontAwesomeIcon icon={faTriangleExclamation} /> {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5">
                    * Email address
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <div className="text-red-500 text-sm mt-1 flex items-center gap-2">
                        <FontAwesomeIcon icon={faTriangleExclamation} /> {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-5">
                    * Phone number
                  </label>
                  <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  />
                  <ErrorMessage name="phone">
                    {(msg) => (
                      <div className="text-red-500 text-sm mt-1 flex items-center gap-2">
                        <FontAwesomeIcon icon={faTriangleExclamation} /> {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
                <Button type="submit" color={'darkOutlined'} size={'filter'}>
                  Place an order
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
