import React, { useEffect, useState } from 'react'
import { FaCartArrowDown, FaHeart, FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToWishList, removeProductToWishList } from '../../redux/actions/wishListAction';
import { useSelector } from 'react-redux';
import { notifyError, notifySuccess, notifyWarning } from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import ProductCardHook from '../../hook/products/product-card-hook';
import { Spinner, Tooltip } from '@material-tailwind/react';
import AddToCartHook from '../../hook/cart/add-to-cart-hook';
import AddToCartFromCardHook from '../../hook/cart/add-to-cart-from-cardProduct-hook';
function ProductCard( { image, titleOfProdcut, description, price, id, rateAvg, favProduct } ) {
    const [ handelFav, Fav ] = ProductCardHook( id, favProduct )
    const [ handelAddToCart, loadingAdd ] = AddToCartFromCardHook( id )


    return (
        <div className='bg-white  pl-2  md:p-3 rounded-lg shadow-lg overflow-hidden flex flex-col justify-end'>
            <div className='h-full flex items-center'>
                <Link to={ `/products/${id}` } >
                    <Tooltip content="More details" className="bg-[#474751]">
                        <img src={ image } alt='' className=' m-auto' />
                    </Tooltip>

                </Link>
            </div>
            <div>
                <div className='flex justify-between pr-1'>
                    <h1 className='text-sm md:text-lg  font-sans'>{ titleOfProdcut }</h1>
                    <Tooltip content="Add to wish list" className="bg-[#474751]">
                        <div className='flex items-end cursor-pointer' onClick={ handelFav }>
                            { !Fav ? <FaRegHeart className='mb-2' /> : <FaHeart className='mb-2 text-red-700' /> }
                        </div>
                    </Tooltip>
                </div>
                <span className='text-sm md:text-md  font-sans text-gray-600'>{ description.length >= 40 ? description.slice( 0, 40 ) + " ..." : description }</span>

            </div>
            <div>
                <div className='flex justify-around sm:justify-between items-center mt-2 md:mt-4'>
                    <div>
                        <span className='font-[800] text-sm md:text-lg text-[#474751]'>{ price } </span>$
                    </div>
                    <div className='flex text-yellow-700 pr-1 text-sm md:text-md items-center'>{ rateAvg ? rateAvg : 4.8 } <FaStar className='ml-1 ' /></div>
                    <Tooltip content="Add to cart" className="bg-[#474751]">
                        <div className='hover:text-[#2196f3] cursor-pointer text-[#474751]' onClick={ handelAddToCart }><FaShoppingCart className='w-[25px] h-[25px]' /></div>
                    </Tooltip>
                </div>
                { loadingAdd ? <Spinner /> : <div></div> }
            </div>
            <ToastContainer />
        </div >
    )
}

export default ProductCard