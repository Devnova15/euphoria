import React from 'react';
import Button from "../Button/Button.jsx";
import {ROUTS} from "../../constants/routs.js";
import './EmptyCart.css'

const EmptyCart = () => {
    return (
        <div className="empty-cart-container">
            <img className="empty-cart" src="/EmptyCart.png" alt="Empty Cart" />
            <div>
                <h3>Your cart is empty and sad :(</h3>
                <p>Add something to make it happy!</p>
            </div>
            <Button type={'link'} title={'Continue Shopping'} to={ROUTS.ROOT} />
        </div>
    );
}


export default EmptyCart;