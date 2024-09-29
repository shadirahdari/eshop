import React from 'react';
import { Checkbox } from '../Checkbox';

export const FilterGroups = ({ title, list, formik, radio = false }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{title}</label>
        {list.map((item, index) => (
            <Checkbox
                radio={radio}
                label={item}
                key={index}
                type="checkbox"
                id={`${title}-${index}`}
                name={title}
                value={index}
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

