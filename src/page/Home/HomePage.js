import React from 'react';
import Slideshow from "../../Component/Home/Slideshow";
import Brands from "../../Component/Brand/Brands"
import CardProductsContainer from "../../Component/Products/CardPrandsContainer"
import Ads from "../../Component/Home/Ads";
import Category from '../../Component/Category/CategoryContainer';
import NewProducts from '../../Component/Products/NewProducts';

function HomePage() {
    return (
        <div>
            <Slideshow />
            <Category />
            <Brands />
            <CardProductsContainer />
            <Ads />
            <NewProducts />
        </div>
    )
}

export default HomePage