import React from 'react';
import './FormInput.css'

const FormInput = ({value, defaultValue='', id, placeholder, errors, register, required=false, onChange, label, type='text', htmlFor, isFullWidth=false}) => {
// const fullWidth = isFullWidth ? "full-width" : ""

 return (
            <div className={`form-group ${isFullWidth ? "full-width" : ""}`}>
                <label htmlFor={htmlFor}>{label}</label>
                <input {...register(id)} type={type} id={id} placeholder={placeholder} className="form-input" value={value} defaultValue={defaultValue} required={required} onChange={onChange}/>
                {/*{errors[id] && <p>This field is required</p>}*/}
            </div>
    );
};

export default FormInput;