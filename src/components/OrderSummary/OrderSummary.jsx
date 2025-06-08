import React, {useEffect, useMemo, useState} from 'react';
import './OrderSummary.css';
import {TitleSection, SummaryItem, OrderSummaryCard, SummarySection} from "./components /index.js";
import {useCart} from "../../store/useCart.js";

const OrderSummary = ({cart, distance, setCart}) => {
    const {products,increaseProductQuantity,decreaseProductQuantity, removeProduct} = useCart (state=>state)


        const getDeliveryPrice = (distance) => {
            const priceMap = [
                {maxDistance: 100000, price: 5},
                {maxDistance: 200000, price: 10},
                {maxDistance: 300000, price: 20},
                {maxDistance: 400000, price: 30},
                {maxDistance: 500000, price: 40},
                {maxDistance: 600000, price: 50},
                {maxDistance: 700000, price: 60},
                {maxDistance: 800000, price: 70},
                {maxDistance: Infinity, price: 100}
            ]
            for (const {maxDistance, price} of priceMap) {
                if (distance <= maxDistance) {
                    return price;
                }
            }
        }

        const deliveryFee = useMemo(() => {
            return distance && distance.distance ? getDeliveryPrice(distance.distance) : 0;
        }, [distance])


        useEffect(() => {
            if (distance) {
                console.log('distanceDelivery', getDeliveryPrice(deliveryFee))
            }
        }, [distance, deliveryFee])


        const [subTotal, setSubTotal] = useState(cart?.reduce((acc, product) => {
            return acc + product.price * product.quantity
        }, 0))


        const heandleRemoveProductFromCart = (id) => removeProduct(id)

        const handleIncreaseProductQuantity = (id) => increaseProductQuantity(id)
        const handleDecreaseProductQuantity = (id) => decreaseProductQuantity(id)
        console.log(cart)

        useEffect(() => {
            setSubTotal(products.reduce((total, product) => {
                // let priceWithDiscount
                // if (product.discount) {
                //     priceWithDiscount = product.price - product.price * product.discount / 100
                // } else {
                //     priceWithDiscount = product.price
                // }
                const priceWithDiscount = product.price ?
                    product.price - product.price * product.discount / 100 :
                    product.price

                const productPriceWithDiscount = priceWithDiscount * product.quantity
                total += productPriceWithDiscount
                return total
            }, 0))
        }, [products])

        return (
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <TitleSection title="Order Summary"/>

                <div>
                    {products?.map(product => (<OrderSummaryCard key={product.id} product={product}
                                                             decreaseQuantity={handleDecreaseProductQuantity}
                                                             increaseQuantity={handleIncreaseProductQuantity}
                                                             removeFromCart={heandleRemoveProductFromCart}/>))}
                </div>
                <SummarySection items={products.length} subtotal={subTotal} distance={distance} shipping={deliveryFee}/>
            </div>
        );
    }
;

export {OrderSummary};