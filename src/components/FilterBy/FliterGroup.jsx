import React, {useEffect} from 'react';
import { Checkbox } from '../Checkbox';
import {useProductContext} from "../../pages/Home/constants.jsx";

export const FilterGroups = ({ title, list, formik, radio = false }) => {
    const { setFilters } = useProductContext()
    useEffect(() => {
        setFilters(formik.values);
    }, [formik.values])
   return  (
        <div className="mb-4">
            <label className="block text-sm font-bold font-medium text-zinc-900 mb-4">{title}</label>
            {list.map((item, index) => (
                <Checkbox
                    radio={radio}
                    label={item}
                    key={index}
                    type="checkbox"
                    id={`${title}-${index}`}
                    name={title}
                    value={radio ? index : item}
                    onChange={radio ? () => {
                        formik.setFieldValue(title, index)
                    } : formik.handleChange}
                    checked={radio ? formik.values[title] === index : formik.values[title]?.includes(item)}
                />
            ))}
            {formik.touched[title] && formik.errors[title] && (
                <div className="text-red-500 text-sm">{formik.errors[title]}</div>
            )}
        </div>
    );
}

