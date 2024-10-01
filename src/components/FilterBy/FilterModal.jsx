import React, { useReducer } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { filterReducer, initialState } from './filterReducer.jsx';
import { FilterGroups } from "./FliterGroup.jsx"
import { Button } from '../Button/index.jsx';
import { useProductContext } from '../../pages/Home/constants.jsx';
import FilterContent from "./FilterContent.jsx";


const FilterModal = ({ show, close, }) => {
 /*
  // const [state, dispatch] = useReducer(filterReducer, initialState);

  // Define validation schema with Yup
  const validationSchema = Yup.object().shape({
    Brand: Yup.array().min(1, 'Select at least one brand'),
    Price: Yup.number().max(1, "Select at least one range"),
    Color: Yup.array().min(1, 'Select at least one color'),
    Type: Yup.array().min(1, 'Select at least one type'),
  });

  // Set up Formik
  const formik = useFormik({
    initialValues: {
      Brand: [],
      Price: 0,
      Color: [],
      Type: [],
    },
    validationSchema,
    // onSubmit: (values) => {
    //   // Dispatch values to your reducer or perform any other action
    //   // dispatch({ type: 'SET_FILTERS', payload: values });
    //   close(); // Close the modal on submit
    // },
  }); */
  return show && (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "#171717c2" }}>
      <div className="bg-white w-full h-full px-4 py-6 overflow-scroll">
        <h2 className="modal-title lg:hidden">Filter By</h2>
        <FilterContent close={close} />
        { /* <form onSubmit={formik.handleSubmit} className="flex flex-col mt-4">
            <FilterGroups title={"Type"} list={['Mobile phones', 'Accessories']} formik={formik} />
            <FilterGroups title={"Brand"} list={['Samsung', 'Xiaomi', 'Apple', 'OnePlus', 'Sony']} formik={formik} />
            <FilterGroups radio={true} title={"Price"} list={['Any', '0 - 100 Eur/month', '100 - 500 Eur/month', '500 - 1000 Eur/month', '1000 - 1500 Eur/month', '15000 - 2000 Eur/month']} formik={formik} />
            <FilterGroups title={"Color"} list={['Black', 'Yellow', 'Green', 'Silver', 'Rose gold', 'Red', 'white']} formik={formik} />          <div className=' p-6 flex gap-4'>
            <Button color="brightOutlined" size="filtersClose" onClick={close} className="w-full">
              Close
            </Button>
            <Button color="dark" size="filtersResults" onClick={() => {
              close()
              setFilters(formik.values)
            }}>
              See results
            </Button>

          </div>
        </form> */ }
      </div>
    </div>
  );
};

export default FilterModal;
