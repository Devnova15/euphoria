import React, {useEffect, useState} from 'react';
import './CheckoutForm.css';
import { useForm} from "react-hook-form"
import {countryData} from "../../constants/country-data.js";
import {buildQueryString} from "../../helpers/buildQueryString.js";
import FormInput from "../FormInput/FormInput.jsx";
import Button from "../Button/Button.jsx";

const CheckoutForm = ({setDistance}) => {
    const [region, setRegion] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);
    const [city, setCity] = useState(null);

   const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
   } = useForm()


    const onSubmit = (data) => console.log(data)

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
        <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">

                <FormInput htmlFor={"firstName"} label={"First Name*"} id={"firstName"} value={''} register={register} placeholder={"Enter your first name"} required/>

                <FormInput htmlFor={"lastName"} label={"Last Name*"} id={"lastName"} value={''} register={register} placeholder={"Enter your last name"} required/>

            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="regions">Country / Region*</label>
                    <select
                        id="regions"
                        name="regions"
                        onChange={handleChangeRegion}
                        className="form-select"
                        required
                    >
                        <option value="">Выберите регион</option>
                        {
                            countryData.map((region, index) => (
                                <option key={`${region.name} ${index}`} value={region.name}>
                                    {region.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <FormInput htmlFor={"company"} label={"Company Name"} id={"company"} value={''} register={register} placeholder={"Company (optional)"}/>
            </div>

            <div className="form-row">
                <FormInput htmlFor={"street"} label={"Street Address*"} id={"street"} value={''} register={register} placeholder={"House number and street name"} required isFullWidth/>
            </div>

            <div className="form-row">
                <FormInput htmlFor={"apt"} label={"Apt, suite, unit"} id={"apt"} value={''} register={register} placeholder={"apartment, suite, unit, etc. (optional)"} isFullWidth/>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="city">City*</label>
                    <select
                        id="city"
                        name="city"
                        onChange={handleChangeCity}
                        className="form-select"
                        disabled={!region}
                        required
                    >
                        <option value="">Выберите город</option>
                        {region && countryData.find(r => r.name === region)?.city.map(c => (
                            <option key={c.name} value={c.name}>{c.name}</option>
                        ))}


                    </select>
                </div>

                <FormInput htmlFor={"postal"} label={"Postal Code*"} id={"postal"} value={''} register={register} placeholder={"Postal Code"} required />

            </div>

            <div className="form-row">
                <FormInput htmlFor={"phone"} label={"Phone*"} type={'tel'} id={"phone"} value={''} register={register} placeholder={"Phone"} isFullWidth required />
            </div>

            <Button title={'Continue to delivery'}/>
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="saveInfo"
                    checked={saveInfo}
                    onChange={() => setSaveInfo(!saveInfo)}
                    className="form-checkbox"
                />
                <label htmlFor="saveInfo" className="checkbox-label">Save my information for a faster checkout</label>
            </div>
        </form>
    )

};

export default CheckoutForm;