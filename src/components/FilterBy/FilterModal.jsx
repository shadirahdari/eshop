import React, { useReducer } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { filterReducer, initialState } from './filterReducer.jsx';
import { FilterGroups } from "./FliterGroup.jsx"
import { Button } from '../Button/index.jsx';

const FilterModal = ({ show, close }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  // Define validation schema with Yup
  const validationSchema = Yup.object().shape({
    Brand: Yup.array().min(1, 'Select at least one brand'),
    Price: Yup.array().min(1, 'Select at least one price range'),
    Color: Yup.array().min(1, 'Select at least one color'),
    Type: Yup.array().min(1, 'Select at least one type'),
  });

  // Set up Formik
  const formik = useFormik({
    initialValues: {
      Brand: [],
      Price: [],
      Color: [],
      Type: [],
    },
    validationSchema,
    onSubmit: (values) => {
      // Dispatch values to your reducer or perform any other action
      dispatch({ type: 'SET_FILTERS', payload: values });
      close(); // Close the modal on submit
    },
  });

  return show && (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "#171717c2" }}>
      <div className="bg-white rounded shadow-lg">
        <h2 className="text-xl mb-4  p-6">Filter By</h2>
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <div className=' p-6' style={
            {
              overflow: "hidden scroll",
              maxHeight: "50vh",
              width: 500,
              gap: 24,
            }
          }>

            <FilterGroups title={"Type"} list={['Mobile phone', 'Accessories']} formik={formik} />
            <FilterGroups title={"Brand"} list={['Samsung', 'Xiaomi', 'Apple', 'OnePlus', 'Sony']} formik={formik} />
            <FilterGroups title={"Price"} list={['0 - 100 Eur/month', '100 - 500 Eur/month', '500 - 1000 Eur/month', '1000 - 1500 Eur/month', '15000 - 2000 Eur/month']} formik={formik} />
            <FilterGroups title={"Color"} list={['Black', 'Yellow', 'Green', 'Silver', 'Rose gold', 'Red', 'white']} formik={formik} />

          </div>
          <div className=' p-6 flex'>
          <Button color="brightOutlined" size="filter" onClick={close} className="w-full">
              Close
            </Button>
            <Button color="brightOutlined" size="filter" className="w-full mr-2">
            See result</Button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;

