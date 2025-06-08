import './Button.css'
import React from 'react';
import {Link} from "react-router-dom";
import {ROUTS} from "../../constants/routs.js";

const Button = ({
                    type = 'button', title, icon = undefined, classNames = '', onClick = () => {}, to = "" }) => {

    const isLink = type === 'link'

    if (isLink) {
        return (
            <Link to={to}>
                <button type={"button"} className={`continue-button ${classNames}`}>
                    {icon && icon}
                    {title}
                </button>
            </Link>
        )
    } else {
        return (
            <button type={type} className={`continue-button ${classNames}`} onClick={onClick}>
                {icon && icon}
                {title}
            </button>
        )

    }


}

export default Button;