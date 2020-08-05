import { useState } from 'react';

function useForm(initialValues) {
    const [ values, setValues ] = useState(initialValues);

    const setValue = function(key, value) {
        setValues(
            {
                ...values,
                [key]: value
            }
        );
    };

    const handleChange = function(changeEvent) {
        const { value, name } = changeEvent.target;
        setValue(name, value);
    };

    const clearForm = function (initialValues) {
        setValues(initialValues);
    };

    return {
        values,
        handleChange,
        clearForm
    };
};

export default useForm;