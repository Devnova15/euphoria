import React from 'react';
import {BannerEmblaCarousel} from "../components/Banner&EmblaCarousel/Banner&EmblaCarousel.jsx";
import Products from "../components/Products/Products.jsx";
import TopBrandsDeal from "../components/TopBrandsDeal/TopBrandsDeal.jsx";
import LimelightProducts from "../components/InTheLimelightProducts/LimelightProducts.jsx";

const RootPage = ({cart, setCart}) => {

    return (
         <>
             <BannerEmblaCarousel/>
             <Products cart={cart} setCart={setCart}/>
             <TopBrandsDeal/>
             <LimelightProducts/>
         </>
    );
}

export default RootPage;