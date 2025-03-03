import React from 'react';

const ProductCard = ({imgUrl, name, desciption, id}) => {

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
            </div>

        </div>
    )

};

export default ProductCard;