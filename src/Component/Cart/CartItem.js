import React from 'react'
import { FaStar, FaTrashAlt } from "react-icons/fa"
import ColorOfProduct from '../Products/ColorOfProduct'

import { Button, Input, Spinner, Tooltip } from '@material-tailwind/react'
import ApplyCopon from './applyCopon'
import { URL } from '../../Api/baseUrlWithoutAxios'
import { Link } from 'react-router-dom'
import { LinearProgress } from '@mui/material'


function CartItem( { idCartItem, Category, title, imageCover, Brand, price, color, count, ratingsAverage, idProduct } ) {

    const [ , , , , , , , , newCount, handelCount, handleDelete, loadingDelete, setNewCount, loadingCount ] = ApplyCopon( idCartItem, count );
    const imagePath = `${URL}products/${imageCover}` || "Product Delted"
    return (
        <div className='container bg-white flex flex-col sm:grid  grid-cols-12 py-2 my-4 rounded-lg shadow-lg'>
            <div className='col-span-3 sm:mr-4'>
                { imagePath.length > 20 ?
                    <Link to={ `/products/${idProduct}` }>
                        <Tooltip content={ `More details about ${title}` } className="bg-mainGray">
                            <img src={ imagePath } alt='asPhoto' className='w-full'></img>
                        </Tooltip>
                    </Link>

                    : <div>"Product Delted"</div>
                }
            </div>

            <div className='col-span-7 flex flex-col py-10'>
                <span className='text-md md:text-xl  font-bold mb-1 bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900 text-center'>{ title || "Product Delted" }</span>
                <span className='text-md md:text-xl  font-bold mb-1 bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900 text-center'>{ Category || "Product Delted" }</span>
                <span className='flex'><h1 className='text-md md:text-xl  font-bold mr-1 bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900'>Brand: </h1> <span className='font-bold text-blue-gray-600 flex  items-center'>{ Brand || "Product Delted" }</span></span>
                <span className='flex my-6 justify-between bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900'> <ColorOfProduct color={ color || "#ffffff" } /> <span className='flex items-center text-yellow-800'>{ ratingsAverage || 4.7 } <FaStar className='ml-1' /> </span></span>
                <div className=''>

                    <div className="relative flex max-w-[300px] my-6">
                        <Input type="number" label="Quantity" value={ newCount } onChange={ ( e ) => setNewCount( e.target.value ) } className="pr-20" containerProps={ { className: "min-w-0", } } />
                        <Button size="sm" onClick={ handelCount } color={ "blue" } className="!absolute right-1 top-1 rounded" disabled={ newCount <= 0 }>Set</Button>
                    </div>
                    { loadingCount ? <LinearProgress /> : <div></div> }

                </div>
            </div>
            <div className='col-span-2 flex sm:flex-col justify-around  items-center md:items-end'>
                <span onClick={ handleDelete } className='flex items-center cursor-pointer text-white  bg-tooltip p-[7px] rounded-lg'><FaTrashAlt className='mr-1' /><span >Delete</span></span>
                <span className='font-[800] paragraph text-right sm:text-left'>{ price || 0 } $</span>
            </div>
            { loadingDelete ? <Spinner className="h-12 w-12" /> : <div></div> }
        </div>
    )
}

export default CartItem