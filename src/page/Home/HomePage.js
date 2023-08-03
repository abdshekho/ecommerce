import React from 'react';
import Slideshow from "../../Component/Home/Slideshow";
import Brands from "../../Component/Brand/Brands"
import CardProductsContainer from "../../Component/Products/CardPrandsContainer"
import Ads from "../../Component/Home/Ads";
import CategoryContainer from '../../Component/Category/CategoryContainer';
// import NewProducts from '../../Component/Products/NewProducts';
import ViewHomeProductsHook from '../../hook/products/view-home-products-hook';

function HomePage() {
    const [items] = ViewHomeProductsHook();
    return (
        <div>
            <Slideshow />
            <CategoryContainer />
            <CardProductsContainer titleOfBar={"New products"} btnTitle={ "More" } prodcuts={items}/>
            <Brands />
            <Ads />
            <CardProductsContainer titleOfBar={"wish list"} btnTitle={ "More" } prodcuts={items}/>
            {/* <NewProducts /> */}
        </div>
    )
}

export default HomePage