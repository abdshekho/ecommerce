import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

// import { Link } from 'react-router-dom';
import BarOfHomePage from '../utility/BarOfHomePage';
import Spinner from '../utility/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
import CardContainerHook from '../../hook/products/Card-container-hook';
import { URL } from '../../Api/baseUrlWithoutAxios';
function CardProductsConainerFavorite( { titleOfBar, prodcuts } ) {
    const [ favProduct ] = CardContainerHook()

    return (
        <div className='container mt-20 shadow-md bg-[#f2f1f6d1] py-10 rounded-3xl  '>
            <div className='hidden sm:block'>
                <BarOfHomePage title={ titleOfBar } btnTitle={ "More" } pathRoute={ "AllProudct" } />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                { prodcuts ? prodcuts.map( ( item ) => {
                    return <ProductCard key={ item._id } image={ `${URL}products/${item.imageCover}` } description={ item.description } price={ item.price } id={ item._id } titleOfProdcut={ item.title } rateAvg={ item.ratingsAverage } favProduct={ favProduct } />

                } ) : <Spinner /> }

            </div>
        </div>
    )
}

export default CardProductsConainerFavorite