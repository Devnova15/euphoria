import Title from "../../components/Title/Title.jsx";
import './CartPage.css'
import {OrderSummary} from "../../components/OrderSummary/OrderSummary.jsx";
import {CONFIG} from "../../config/index.js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm.jsx";
import {useState} from "react";
import EmptyCart from "../../components/EmptyCart/EmptyCart.jsx";
import {useCart} from "../../store/useCart.js";

const CartPage = () => {
    const [distance, setDistance] = useState(0)
    console.log(CONFIG.VISICOM_API_KEY)

    const {products} = useCart(state => state)
    if (products.length ) {
        return (
        <div className='cart-page'>
            <Title text={'Check Out'}/>
            <h3>Billing Details</h3>

            <div className='checkout-wrapper'>

                <div className='cart-form'>
                    <CheckoutForm setDistance={setDistance}/>
                </div>

                <div className='order-summary'>
                    <OrderSummary distance={distance}/>

                </div>
            </div>

        </div>
        );
    }else {
        return(
       <EmptyCart/>
        )
    }

}

export default CartPage;