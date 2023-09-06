import React, { useEffect, useState } from 'react'
import { FaCartArrowDown, FaHeart, FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToWishList, removeProductToWishList } from '../../redux/actions/wishListAction';
import { useSelector } from 'react-redux';
import { notifyError, notifySuccess, notifyWarning } from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import ProductCardHook from '../../hook/products/product-card-hook';
import { IconButton, Spinner, Tooltip } from '@material-tailwind/react';
import AddToCartHook from '../../hook/cart/add-to-cart-hook';
import AddToCartFromCardHook from '../../hook/cart/add-to-cart-from-cardProduct-hook';
import { LinearProgress } from '@mui/material';
function ProductCard( { image, titleOfProdcut, description, price, id, rateAvg, favProduct } ) {
    const [ handelFav, Fav ] = ProductCardHook( id, favProduct )
    const [ handelAddToCart, loadingAdd ] = AddToCartFromCardHook( id )


    return (
        <div className='bg-white  pl-2  md:p-3 rounded-lg shadow-lg overflow-hidden flex flex-col justify-end'>
            <div className='h-full flex items-center my-2'>
                <Link to={ `/products/${id}` } >
                    <Tooltip content="More details" className="bg-mainGray">
                        <img src={ image } alt='' className=' m-auto hover:opacity-[0.8]' />
                    </Tooltip>
                </Link>
            </div>
            <div>
                <div className='flex justify-between pr-1'>
                    <h1 className='paragraph  font-sans'>{ titleOfProdcut }</h1>
                    <Tooltip content="Add to wish list" className="bg-mainGray">
                        <IconButton color="red" variant="text" onClick={ handelFav }>
                            <div className='flex items-end cursor-pointer' >
                                { !Fav ? <FaRegHeart className='' /> : <FaHeart className=' text-red-700' /> }
                            </div>
                        </IconButton>
                    </Tooltip>
                </div>
                <span className='text-sm md:text-md  font-sans text-gray-600'>{ description.length >= 27 ? description.slice( 0, 27 ) + " ..." : description }</span>

            </div>
            <div>
                <div className='flex justify-around sm:justify-between items-center mt-2 md:mt-4'>
                    <div>
                        <span className='font-[800] paragraph text-mainGray'>{ price } </span>$
                    </div>
                    <div className='flex text-yellow-700 pr-1 text-sm md:text-md items-center'>{ rateAvg ? rateAvg : 4.8 } <FaStar className='ml-1 ' /></div>
                    <Tooltip content="Add to cart" className="bg-mainGray">
                        <IconButton disabled={ loadingAdd } variant="text" onClick={ handelAddToCart }>
                            <div className='cursor-pointer text-mainGray'><FaShoppingCart className='w-[25px] h-[25px]' /></div>
                        </IconButton>
                    </Tooltip>
                </div>
                {/* { loadingAdd ? <Spinner /> : <div></div> } */ }
                { loadingAdd ? <LinearProgress /> : <div></div> }


            </div>
            <ToastContainer />
        </div >
    )
}

export default ProductCard