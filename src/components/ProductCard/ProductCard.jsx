import React, {useEffect, useMemo, useState} from 'react';
import './ProductCard.css'
import {FaTag} from "react-icons/fa";
import {ShoppingBasket, Check} from "lucide-react";
import {useCart} from "../../store/useCart.js";

const ProductCard = ({
                         imgUrl, name, description, id, price, discount, cart = [], setCart = () => {
    }
                     }) => {

    const {products, addProduct, removeProduct} = useCart(state => state)

    const [isInCart, setIsInCart] = useState(products.some((product) => product.id === id))
    console.log("ZUSTAND CART: ", products)


    const handleAddToCart = () => {
        if (!isInCart) {
            addProduct( {imgUrl, name, description, id, price, discount, quantity:1})
            setIsInCart(true)
        }
    }

    const handleRemoveFromCart = (id) => {
        removeProduct(id)
        setIsInCart(false)
    }
    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={imgUrl} alt={name}/>
            </div>

            <div className="card-footer">
                <h4 className="card-title">{name}</h4>
                {description && <p className="card-description">{description}</p>}
                {price !== undefined && (
                    <div className="card-price">${price.toFixed(2)}</div>
                )}

                {!isInCart ? (
                    <button onClick={handleAddToCart} className="cart-button">
                        Add to Cart
                    </button>
                ) : (
                    <button className="cart-button" onClick={() => handleRemoveFromCart(id)}>
                    {/*<button className="cart-button" onClick={() => {}}>*/}
                        RemoveFromCart
                    </button>
                )}
            </div>
        </div>
    );


};

export default ProductCard;