import React, { useState } from 'react'
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Tooltip, } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { deleteProducts } from '../../redux/actions/productsAtion';
function AdminCartProduct( { id, title, image, description, price, Rating } ) {
    const dispatch = useDispatch();
    const [ open, setOpen ] = useState( false );
    const handleOpen = () => { setOpen( !open ) };
    const handleDelte = async () => {
        await dispatch( deleteProducts( id ) )
        setOpen( !open )
        window.location.reload()
    }

    return (
        <div className='bg-white  pl-2  md:p-3 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between'>
            <div className='flex justify-between text-sm px-1 py-1 text-blue-gray-700'>
                {/* <Button onClick={ handleOpen } variant="gradient">
                    Open Dialog
                </Button> */}

                <span onClick={ handleOpen } className='flex cursor-pointer text-white  bg-[#000000c2] p-[7px] rounded-lg'><FaTrashAlt className='mr-1' /><span className=' hidden sm:block'>Delete</span></span>
                <Link to={ `/admin/editproducts/${id}` } >
                    <span className='flex cursor-pointer text-white  bg-[#000000c2] p-[7px] rounded-lg'><FaPencilAlt className='mr-1' /><span className=' hidden sm:block'>Edit</span></span>
                </Link>

                <Dialog open={ open } handler={ handleOpen } className='w-full max-w-[90%] md:max-w-[40%]'>
                    <DialogHeader>Confirm product delete</DialogHeader>
                    <DialogBody divider>
                        Do you want to delete thes prodcut?<br />
                        This process cannot be undone.
                    </DialogBody>
                    <DialogFooter className='flex justify-center md:justify-end'>
                        <Button variant="text" color="gray" onClick={ handleOpen } className="mr-1">
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="red" onClick={ handleDelte }>
                            <span>Delete</span>
                        </Button>
                    </DialogFooter>
                </Dialog>


            </div>

            <div className='flex flex-col justify-between h-full'>
                <div className='h-full flex items-center'>
                    <Link to={ `/products/${id}` } >
                        <Tooltip content="More details" className="bg-[#474751]" placement="bottom-start">
                            <img src={ image } alt='' className=' m-auto' />
                        </Tooltip>
                    </Link>
                </div>
                <div>
                    <div className='flex justify-between pr-1'>
                        <h1 className='text-sm md:text-lg  font-sans'>{ title }</h1>
                        <div className='flex items-end'>
                            <FaRegHeart className='mb-2' />
                        </div>
                    </div>
                    <span className='text-sm md:text-md  font-sans text-gray-600'>{ description.slice( 0, 40 ) + " ..." }</span>
                </div>
            </div>
            <div className='flex justify-between mt-2 md:mt-4'>
                <div>
                    <span className='font-[800] text-sm md:text-lg'>{ price } </span>$
                </div>
                <div className='flex text-yellow-700 pr-1 text-sm md:text-lg items-center'>{ Rating } <FaStar className='ml-1 ' /></div>
            </div>
        </div>
    )
}

export default AdminCartProduct