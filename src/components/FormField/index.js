import React from 'react';

const defineTag = function(type) {
    if (type === 'textarea') {
        return `textarea`;
    } else {
        return `input`;
    }
};

const FormField = function({ label, type, name, value, onChange}) {
    const Tag = defineTag(type);

    return (
        <div>
            <label>
                {label}:
                <Tag 
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
    
}


export default FormField;