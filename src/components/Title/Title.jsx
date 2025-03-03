import React from 'react';
import cn from 'classnames';
import './Title.css';

const Title = ({color, text}) => {
    return (
        <div className={'title-wrapper'}>
            <div className={cn('title-decor', color)}></div>
            <h2 className={'title'}>
                {text}
            </h2>
        </div>
    );
}

export default Title;