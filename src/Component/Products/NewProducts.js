import React from 'react'
import ProductCard from './ProductCard'
import item from "../../images/item.png";
import clothe from "../../images/clothe.png";
import mobile from "../../images/mobile1.png"
import BarOfHomePage from '../utility/BarOfHomePage';
function NewProducts() {
    const descriptionOne = 'this is field to write about product or Discraption'
    return (
        <div className='container mt-20'>
            <BarOfHomePage title={ "New Product" } btnTitle={ "More" } pathRoute={ "AllProudct" } />
            <div className='md:container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                <ProductCard image={ item } description={ descriptionOne } price={ 800 } Rating={ 4.2 } />
                <ProductCard image={ mobile } description={ descriptionOne } price={ 600 } Rating={ 3.4 } />
                <ProductCard image={ clothe } description={ descriptionOne } price={ 750 } Rating={ 2.5 } />
                <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />

            </div>
        </div>
    )
}

export default NewProducts