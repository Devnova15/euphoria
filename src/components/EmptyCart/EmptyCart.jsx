import React from 'react';
import Button from "../Button/Button.jsx";
import {ROUTS} from "../../constants/routs.js";

const EmptyCart = () => {

    return (
        <div>
            <img src="/EmptyCart.png" alt="Empty Cart"/>
            <div>
            <h3>Your cart is empty and sad :(</h3>
                <p>Add something to make it happy!</p>
            </div>
            <Button type={'link'} title={'Continue Shopping'} to={ROUTS.ROOT}/>

        </div>
    );
}

export default EmptyCart;