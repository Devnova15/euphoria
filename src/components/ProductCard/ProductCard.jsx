import React from 'react';
import './ProductCard.css'
import {FaTag} from "react-icons/fa";
const ProductCard = ({imgUrl, name, desciption, id, price}) => {

    return(
        <div className={"card"}>
            <div className={'img-wrapper'}>
                <img src={imgUrl} alt={name}/>
            </div>

            <div className={'card-footer'}>
                <div className={'card-info'}>
                    <h4 className={'card-title'}>{name}</h4>
                    <p className={'card-description'}>{desciption}</p>
                </div>
                <div className={'card-button'}></div>
                {price !== undefined && price !== null && (
                    <div className="cart-price">
                        <FaTag className="price-icon" />
                        {price.toFixed(2)}$
                    </div>
                )}
            </div>

        </div>
    )

};

export default ProductCard;