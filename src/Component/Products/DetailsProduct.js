import React, { useState } from 'react'
import { FaGlobeAmericas, FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import ColorOfProduct from './ColorOfProduct';
import { Button, Chip, IconButton, Tooltip } from '@material-tailwind/react';
import { FaShoppingCart } from "react-icons/fa";
import AddToCartHook from '../../hook/cart/add-to-cart-hook';
import { ToastContainer } from 'react-toastify';
import Spinner from '../utility/Spinner';
import ProductCardHook from '../../hook/products/product-card-hook';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';

function DetailsProduct( { loading, id, title, category, description, price, brand, colors, rateAvg, favProduct, sold, quantity, createdAt, brandId, categoryId, rateQty } ) {
    const [ colorChoose, handelColro, handelAddToCart, loadingAdd ] = AddToCartHook( id, colors );
    const [ handelFav, Fav ] = ProductCardHook( id, favProduct )
    console.log( loading )
    return (
        <div className='p-6 sm:p-12 bg-white rounded-3xl shadow-2xl'>
            <div>
                <div>
                    { !loading ?
                        <h2 className='text-md md:text-xl  font-bold mb-2 bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900 text-center'>{ title }</h2>
                        : <Skeleton variant="text" height={ 66 } /> }
                </div>
                <span className='flex  items-center  justify-between my-2'>
                    <div className='flex text-yellow-700 pr-1 text-sm md:text-lg items-baseline'>
                        <FaStar className='mr-1' /> { rateAvg } </div>
                    <span className='text-xs text-blue-gray-500'>({ rateQty } reviews )</span>
                    <Tooltip content="Add to wish list" className="bg-[#474751]">
                        <IconButton color="red" variant="text" onClick={ handelFav }>
                            <div className='cursor-pointer'> { !Fav ? <FaRegHeart className='' /> : <FaHeart className='text-red-700' /> }</div>
                        </IconButton>
                    </Tooltip>
                </span>
                {/* <span className='text-sm md:text-lg  font-sans text-blue-gray-800 hover:text-[#2196f3] mb-10'>
                    <Link to={ `/products/category/${category}/${categoryId}` }>
                        { category || "product may be Deleted already" }
                    </Link>
                </span> */}
            </div>

            <div className='my-2 flex'>
                <span className='text-md md:text-lg  font-bold bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900'>Category: </span>
                <span className='text-sm md:text-lg  font-sans text-blue-gray-900 hover:text-[#2196f3] ml-5'>
                    <Link to={ `/products/category/${category}/${categoryId}` }>
                        { !loading ?
                            category
                            : <Skeleton width={ 100 } height={ 50 } />
                        }
                    </Link>
                </span>
            </div>
            <div className='my-2 flex'>
                <span className='text-md md:text-lg  font-bold bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900'>Bradn:</span>
                <span className='text-sm md:text-lg  font-sans text-blue-gray-900 hover:text-[#2196f3] ml-5'>
                    <Link to={ `/products/brnad/${brand}/${brandId}` }>
                        { !loading && brand ?
                            brand
                            : <Skeleton width={ 100 } height={ 50 } />
                        }
                    </Link>
                </span>
            </div>

            <div className='flex'><span className='text-md md:text-lg  font-bold bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900'>Available colors: </span>
                <div className='flex ml-5 mt-2'>
                    {
                        !loading && colors ? colors.map( ( item, index ) => {
                            return <div key={ index } onClick={ () => handelColro( item ) } style={ { cursor: "pointer", position: "relative", top: colorChoose === item ? "-15px" : "0" } }><ColorOfProduct color={ item } /></div>
                        } ) : <div className='flex gap-2'>
                            <Skeleton variant="circular" width={ 25 } height={ 25 } />
                            <Skeleton variant="circular" width={ 25 } height={ 25 } />
                            <Skeleton variant="circular" width={ 25 } height={ 25 } />
                            <Skeleton variant="circular" width={ 25 } height={ 25 } />
                        </div>


                    }
                </div>
            </div>
            <div className='mt-3'>
                <span className='text-md md:text-lg  font-bold mb-2 bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900 '>Details:</span>

                { !loading ?
                    <p className='text-sm md:text-lg  font-sans text-blue-gray-600 my-4'>{ description }</p>
                    :
                    <div>
                        <Skeleton variant="text" height={ 45 } />
                        <Skeleton variant="text" height={ 45 } />
                    </div>
                }
                {/* <p className='text-sm md:text-lg  font-sans text-blue-gray-600 my-4'>{ description }</p> */ }
            </div>
            <div className='flex justify-between flex-wrap gap-4 text-sm md:text-md my-4  font-bold bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900'>
                <span>sold: { sold }</span>
                <span>sold total: { sold && price ? sold * price : 0 }$</span>
                <span>available quantity: { quantity }</span>
            </div>
            <div className='flex justify-end text-xs md:text-sm text-blue-gray-600  my-4 items-center gap-1'><FaGlobeAmericas /> { createdAt ? createdAt.slice( 0, 10 ) : 0 }</div>
            <div className='flex'>
                <Button className='flex items-center' onClick={ handelAddToCart }>Add to Cart <FaShoppingCart className='ml-1' />  </Button>
                <Chip value={ price + " $" } className='ml-2 flex items-center bg-gray-100 text-lg text-blue-gray-700' />
                { loadingAdd ? <Spinner /> : <div></div> }
            </div>
            <ToastContainer />
        </div >
    )
}

export default DetailsProduct