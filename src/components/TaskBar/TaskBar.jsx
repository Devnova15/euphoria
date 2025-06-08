import React from 'react';
import './TaskBar.css';
import {Heart, ShoppingCart, Search} from "lucide-react";
import Container from "../Container/Container.jsx";
import {Link, useLocation} from "react-router-dom";
import {ROUTS} from "../../constants/routs.js";
import cn from "classnames";

const TaskBar = () => {
    const {pathname} = useLocation()
    const isWishListPage = pathname === ROUTS.WISHLIST
    const isCartPage = pathname === ROUTS.CART;

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

                <div className={'task-bar__search'}>
                    <Search className={'search-icon'} />
                    <input className={'search-input'} type={'text'} placeholder={'Search...'}/>
                </div>
                <div className={'task-bar__buttons-container'}>
                    <Link to={ROUTS.WISHLIST} className={cn('nav-button', isWishListPage && 'nav-button--active')}>
                        <Heart className={cn('nav-icon', isWishListPage && 'nav-icon--active')}/>
                    </Link>

                    <Link to={ROUTS.CART} className={cn('nav-button', isCartPage && 'nav-button--active')}>
                        <ShoppingCart className={cn('nav-icon', isCartPage && 'nav-icon--active')}/>
                    </Link>
                </div>
            </div>
        </Container>
    )
};

export default TaskBar;