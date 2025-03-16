import React from 'react';
import {BannerEmblaCarousel} from "../components/Banner&EmblaCarousel/Banner&EmblaCarousel.jsx";
import Products from "../components/Products/Products.jsx";
import TopBrandsDeal from "../components/TopBrandsDeal/TopBrandsDeal.jsx";
import LimelightProducts from "../components/InTheLimelightProducts/LimelightProducts.jsx";

const RootPage = () => {
    return (
         <>
             <BannerEmblaCarousel/>
             <Products/>
             <TopBrandsDeal/>
             <LimelightProducts/>
         </>
    );
}

export default RootPage;