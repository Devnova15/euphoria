import React from 'react';
import './TopBrandsDeal.css'
import Container from "../Container/Container.jsx";
// import cn from "classnames";
import Title from "../Title/Title.jsx";

const TopBrandsDeal = () => {
    return (
        <Container>
            <div className={'topBrands-container'}>
                <div className={'topBrands-text__container'}>
                    {/*<div className={cn('topBrands-title__style', color)}></div>*/}
                    {/*<h3 className={'topBrands-title'}>{text}</h3>*/}
                    {/*<Title text={'Top Brands Deal'} color={'white'}/>*/}

                    <h3 className={'topBrands-title'}>Top Brands Deal</h3>
                    <p className={'topBrands-title__description'}>
                        Up To <span className={'topBrands-title__description-decor'}>60%</span> off on brands
                    </p>
                </div>

                <div className={'topBrands-cards__container'}>
                    {['/TopBrandsDeal-Images/nike-logo.png',
                        '/TopBrandsDeal-Images/h&m-logo.png',
                        '/TopBrandsDeal-Images/levis-logo.png',
                        '/TopBrandsDeal-Images/polo-logo.png',
                        '/TopBrandsDeal-Images/puma-logo.png'
                    ].map((image, index) => (
                        <div key={index} className={'topBrands-card'}>
                            <img src={image} alt={`Brand ${index + 1}`} className={'topBrands-card__image'}/>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default TopBrandsDeal;