import {Form, Formik} from "formik";
import TextInput from "../Input/index.jsx";
import {Button} from "../Button/index.jsx";
import React, {useContext} from "react";
import {ModalContext} from "../../store/modal-context.jsx";
import PropTypes from "prop-types";
import submitOrder from "../../api/submitOrder.jsx";
import * as Yup from "yup";

const validationSchema = Yup.object({
    fullName: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .max(30, 'Must be 30 characters or less')
        .required('Fill in the required field'),
    email: Yup.string().email('Invalid email address').required('Fill in the required field'),
    phone: Yup.string()
        .matches(/^\+\d{1,3}\d{7,15}$/, 'Phone number should start with + and contain up to 15 digits')
        .required('Fill in the required field'),
});

const OrderFormContent = ({ onFormSubmit, setIsLoading }) => {
    const { selectedProduct } = useContext(ModalContext);

    return (
        <>
            <p className="text-left font-normal text-base lg:text-lg mb-5 leading-6">
                Please leave your contact details below. We’ll contact you shortly to finalise your order.
            </p>
            <Formik
                initialValues={{ fullName: '', email: '', phone: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    setIsLoading(true);
                    const success = await submitOrder(values, selectedProduct);
                    actions.setSubmitting(false);
                    onFormSubmit(success);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="flex flex-col gap-4">
                        <TextInput label="Name and Surname" name="fullName" placeholder="Enter your name" id="fullName" />
                        <TextInput label="Email address" name="email" placeholder="Enter your email" id="email" />
                        <TextInput label="Phone number" name="phone" placeholder="Enter your phone" id="phone" />
                        <Button type="submit" color="dark" size="form" className="hover:scale-[1.02]">
                            Place an order
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default OrderFormContent;


OrderFormContent.propTypes = {
    onFormSubmit: PropTypes.func,
    setIsLoading: PropTypes.func,
}
