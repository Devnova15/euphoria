import React from 'react';
import './TaskBar.css';
import {Heart, ShoppingCart} from "lucide-react";
import ShopCartIcon from "../Icons/ShopCartIcon.jsx";
import Container from "../Container/Container.jsx";
import {Link, useLocation} from "react-router-dom";
import {ROUTS} from "../../constants/routs.js";
import cn from "classnames";

const TaskBar = ({img1, name1, img2, name2, img3, name3}) => {
    const {pathname} =  useLocation()
    const isWishListPage = pathname === ROUTS.WISHLIST
    const isCartPage = pathname === ROUTS.CART;

    console.log("iaXRTPges", isCartPage)
    return (
        <Container>
        <div className={'task-bar__container'}>
            <Link to={ROUTS.ROOT} className={'task-bar__title__container'}>
                <h1 className={'task-bar__title'}>Euphoria</h1>
                <p className={'task-bar-title__description'}>Keep it classy.</p>
            </Link>

            <ul className="task-bar__categories">
                {['Shop', 'Men', 'Women', 'Combos', 'Joggers'].map((category) => (
                    <li key={category} className={'task-bar__categories-title'}>{category}</li>
                ))}
            </ul>

            <div className={'task-bar__search'}>'heart-button'
                <img className={'search-icon'} src={`/TaskBar-Images/${img1}`} alt={name1}/>
                <input className={'search-input'} type={'text'} placeholder={'Search...'}/>
            </div>
            <div className={'task-bar__buttons-container'}>
                <Link to={ROUTS.WISHLIST} className={cn('heart-button',isWishListPage && 'cart-button--active' )}>

                    <Heart  className={cn('heart-icon', isWishListPage && 'icon--active')}/>

                </Link>

                <Link to={ROUTS.CART} className={cn(isCartPage ?'cart-button--active' : 'cart-button')}>
                    {/*<img className={'cart-icon'} src={`/TaskBar-Images/${img3}`} alt={name3}/>*/}
                    <ShoppingCart  classNames={cn("cart-icon", isCartPage && "icon--active")}/>

                </Link>
            </div>
        </div>
        </Container>
    )
};

export default TaskBar;

