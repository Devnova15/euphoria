import React from 'react';
import './TaskBar.css';
import {Heart} from "lucide-react";
import ShopCartIcon from "../Icons/ShopCartIcon.jsx";

const TaskBar = ({img1, name1, img2, name2, img3, name3}) => {
    return (
        <div className={'task-bar__container'}>

            <div className={'task-bar__title__container'}>
                <h1 className={'task-bar__title'}>Euphoria</h1>
                <p className={'task-bar-title__description'}>Keep it classy.</p>
            </div>

            <ul className="task-bar__categories">
                {['Shop', 'Men', 'Women', 'Combos', 'Joggers'].map((category) => (
                    <li key={category} className={'task-bar__categories-title'}>{category}</li>
                ))}
            </ul>

            <div className={'task-bar__search'}>
                <img className={'search-icon'} src={`/TaskBar-Images/${img1}`} alt={name1}/>
                <input className={'search-input'} type={'text'} placeholder={'Search...'}/>
            </div>
            <div className={'task-bar__buttons-container'}>
                <button className={'heart-button'}>
                    {/*<img  className={'heart-icon'} src={`/TaskBar-Images/${img2}`} alt={name2}/>*/}
                    <Heart className={'heart-icon'}/>
                </button>
                <button className={'cart-button'}>
                    {/*<img className={'cart-icon'} src={`/TaskBar-Images/${img3}`} alt={name3}/>*/}
                    <ShopCartIcon classNames={'cart-icon'}/>
                </button>
            </div>
        </div>
    )
};

export default TaskBar;

