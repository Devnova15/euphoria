import React from 'react';
import './FormInput.css'

const FormInput = ({value, defaultValue='', id, placeholder, errors,  required=false, onChange, label, type='text', htmlFor, isFullWidth=false}) => {
// const fullWidth = isFullWidth ? "full-width" : ""

 return (
            <div className={`form-group ${isFullWidth ? "full-width" : ""}`}>
                <label htmlFor={htmlFor}>{label}</label>
                <input  type={type} id={id} placeholder={placeholder} className="form-input" value={value} defaultValue={defaultValue} required={required} onChange={onChange}/>
                {errors && <p>{errors}</p>}
            </div>
    );
};

export default FormInput;