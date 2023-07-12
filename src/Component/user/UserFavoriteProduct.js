import React from 'react'
import ProductCard from '../Products/ProductCard'
import item from "../../images/item.png";
import clothe from "../../images/clothe.png";
import mobile from "../../images/mobile1.png"
import CardContainerHook from '../../hook/products/Card-container-hook';

function UserFavoriteProduct( { title } ) {
    const [ favProduct ] = CardContainerHook()

    const descriptionOne = 'this is field to write about product or Discraption'
    console.log( favProduct )
    return (
        <div>
            <h1 className='text-md md:text-xl  font-bold mb-1 pl-4 text-blue-gray-700'>{ title }</h1>

            <div className='md:container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2 ml-2 my-6'>
                <ProductCard image={ item } description={ descriptionOne } price={ 800 } Rating={ 4.2 } />
                <ProductCard image={ mobile } description={ descriptionOne } price={ 600 } Rating={ 3.4 } />
                <ProductCard image={ clothe } description={ descriptionOne } price={ 750 } Rating={ 2.5 } />
                <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
            </div>
        </div>
    )
}

export default UserFavoriteProduct