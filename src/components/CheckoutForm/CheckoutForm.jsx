import React, {useEffect, useState} from 'react';
import './CheckoutForm.css';
import {countryData} from "../../constants/country-data.js";
import {buildQueryString} from "../../helpers/buildQueryString.js";
import FormInput from "../FormInput/FormInput.jsx";
import Button from "../Button/Button.jsx";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import {Formik} from "formik";
import {checkOutSchema} from "../../validation/form.schema.js";
import {Loader} from "lucide-react";

const CheckoutForm = ({setDistance}) => {
    const [region, setRegion] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);
    const [city, setCity] = useState(null);
    const initialValues = {
        firstName: '',
        lastName: '',
        regions: '',
        company: '',
        street: '',
        apt: '',
        city: '',
        postal: '',
        phone: '',
        saveInfo: ''
    }
    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    }
    const handleChangeCity = (event) => {
        setCity(countryData.find(r => (r.name === region)).city.find(c => (c.name === event.target.value)))
    }
    useEffect(() => {
        const getDistance = async () => {
            const responce = await fetch(buildQueryString(city))
            return await responce.json()
        }
        if (city) {
            new Promise(resolve => resolve(getDistance())).then((res) => setDistance(res))
        }

    }, [city, setCity])
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={checkOutSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({values, handleSubmit, handleChange, isSubmitting, errors}) => (

isSubmitting ? <Loader/> : (<form className="checkout-form" onSubmit={handleSubmit}>
    <div className="form-row">

        <FormInput value={values.firstName}
                   label={"First Name*"}
                   id="firstName"
                   placeholder={"Enter your first name"}
                   onChange={handleChange}
                   errors={errors.firstName}
        />


        <FormInput value={values.lastName}
                   label={"Last Name*"}
                   id={"lastName"}
                   placeholder={"Enter your last name"}
                   onChange={handleChange}
                   errors={errors.lastName}
        />

    </div>

    <div className="form-row">
        <div className="form-group">
            <label htmlFor="regions">Country / Region*</label>
            <select
                onChange={handleChangeRegion}
                className="form-select"
            >
                <option value={values.regions}>Выберите регион</option>
                {
                    countryData.map((region, index) => (
                        <option key={`${region.name} ${index}`} value={region.name}>
                            {region.name}
                        </option>
                    ))
                }
            </select>
        </div>

        <FormInput value={values.company}
                   id={"company"}
                   label={"Company Name"}
                   placeholder={"Company (optional)"}
                   onChange={handleChange}/>
    </div>

    <div className="form-row">
        <FormInput value={values.street}
                   label={"Street Address*"}
                   onChange={handleChange}
                   placeholder={"House number and street name"}  isFullWidth/>
    </div>

    <div className="form-row">
        <FormInput value={values.apt}
                   label={"Apt, suite, unit"}
                   onChange={handleChange}
                   placeholder={"apartment, suite, unit, etc. (optional)"} isFullWidth/>
    </div>

    <div className="form-row">
        <div className="form-group">
            <label htmlFor="city">City*</label>
            <select
                onChange={handleChangeCity}
                className="form-select"
                disabled={!region}

            >
                <option value={values.regions}>Выберите город</option>
                {region && countryData.find(r => r.name === region)?.city.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                ))}


            </select>
        </div>

        <FormInput value={values.postal}
                   onChange={handleChange}
                   label={"Postal Code*"}
                   placeholder={"Postal Code"}/>

    </div>

    <div className="form-row">
        <PhoneInput
            label={"Phone*"}
            country={'ua'}
            value={values.phone}
            onChange={() => {
            }}
        />
    </div>

    <Button title={'Continue to delivery'} type={'submit'}/>
    <div className="checkbox-container">
        <input
            type="checkbox"
            id="saveInfo"
            checked={saveInfo}
            onChange={() => setSaveInfo(!saveInfo)}
            className="form-checkbox"
        />
        <label htmlFor="saveInfo" className="checkbox-label">Save my information for a faster
            checkout</label>
    </div>
</form>)
            )}
        </Formik>
    )

};

export default CheckoutForm;