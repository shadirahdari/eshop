import {useProductContext} from "../../pages/Home/constants.jsx";
import * as Yup from "yup";
import {useFormik} from "formik";
import {FilterGroups} from "./FliterGroup.jsx";
import {Button} from "../Button/index.jsx";
import React from "react";


const FilterContent = ({close}) => {
// const [state, dispatch] = useReducer(filterReducer, initialState);
    const { setFilters } = useProductContext()
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
    });
return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col mt-4">
        <FilterGroups title={"Type"} list={['Mobile phones', 'Accessories']} formik={formik} />
        <FilterGroups title={"Brand"} list={['Samsung', 'Xiaomi', 'Apple', 'OnePlus', 'Sony']} formik={formik}/>
        <FilterGroups radio={true} title={"Price"}
                      list={['Any', '0 - 100 Eur/month', '100 - 500 Eur/month', '500 - 1000 Eur/month', '1000 - 1500 Eur/month', '15000 - 2000 Eur/month']}
                      formik={formik} />
        <FilterGroups title={"Color"} list={['Black', 'Yellow', 'Green', 'Silver', 'Rose gold', 'Red', 'White', 'Blue', 'Pink']}
                      formik={formik} />
        <div className=' p-6 flex gap-4 lg:hidden'>
            <Button color="brightOutlined" size="filtersClose" onClick={close} >
                Close
            </Button>
            <Button color="dark" size="filtersResults" onClick={() => {
                close()
                setFilters(formik.values)
            }}>
                See results
            </Button>
        </div>
    </form>
)
}

export default FilterContent;
