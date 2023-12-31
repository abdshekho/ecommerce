import { Input, Tooltip } from '@material-tailwind/react';
import React from 'react'
import { FaGlobeAmericas, FaPencilAlt, FaRegClock, FaStar, FaTrashAlt } from "react-icons/fa";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, } from "@material-tailwind/react";
import DeleteRateHook from '../../hook/review/delete-rate-hook';
import { ToastContainer } from 'react-toastify';
import EditRateHook from '../../hook/review/edit-rate-hook';
import ReactStars from "react-rating-stars-component";


function Comment( { review } ) {
    const [ handleDelte, handleOpen, open, setOpen ] = DeleteRateHook( review )
    const [ hondelEdit, handleOpenEdite, openEdite, setOpenEdite, onChangeRateText, newRating, onChangeRateValue, newRatingValue ] = EditRateHook( review )


    const userLoggedIn = localStorage.getItem( "user" ) != null ? JSON.parse( localStorage.getItem( "user" ) )._id : ""
    const userThatReview = review.user && review.user._id ? review.user._id : 0

    const propsOfStartRating = {
        count: 5,
        onChange: value => onChangeRateValue( value ),
        size: 24,
        isHalf: true,
        emptyIcon: < i className="far fa-star" />,
        halfIcon: < i className="fa fa-star-half-alt" />,
        fullIcon: < i className="fa fa-star" />,
        // activeColor: "#ffd700",
        activeColor: "#ffc107",
        value: newRatingValue
    }
    return (
        <div className='p-4 bg-white rounded-lg shadow-lg my-2'>
            <div className='flex items-center justify-between  pt-2  '>
                <div className='flex items-center'>

                    <span className='text-md md:text-xl text-blue-900'>{ review && review.user ? review.user.name : "John Richard " }</span>
                    <span className='flex text-yellow-700 pr-1 text-sm md:text-md ml-2'> <FaStar className='pt-1' /> { review ? review.rating : 4.8 }</span>
                </div>
                { userLoggedIn === userThatReview ?
                    <div className='flex justify-end text-sm px-1 py-1 text-blue-gray-700'>
                        <Tooltip content="Delete">
                            <span className='flex cursor-pointer text-white  bg-tooltip p-[7px] rounded-lg mr-4' onClick={ handleOpen }><FaTrashAlt className='mr-1' /></span>
                        </Tooltip>
                        <Tooltip content="Edite">
                            <span className='flex cursor-pointer text-white  bg-tooltip p-[7px] rounded-lg' onClick={ handleOpenEdite }><FaPencilAlt className='mr-1' /></span>
                        </Tooltip>

                    </div> : <div></div> }
                <Dialog open={ open } handler={ handleOpen } className='w-full max-w-[90%] md:max-w-[40%]'>
                    <DialogHeader>Confirm Comment and Rate delete</DialogHeader>
                    <DialogBody divider>
                        Do you want to delete this Rate?<br />
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
                {/* to Edite Rating  */ }
                <Dialog open={ openEdite } handler={ handleOpenEdite } className='w-full max-w-[90%] md:max-w-[40%]'>
                    <DialogHeader>Confirm Comment and Rate Edite</DialogHeader>
                    <DialogBody divider>

                        <ReactStars { ...propsOfStartRating } classNames="my-4 p-4" />

                        <Input label='new Edite' onChange={ onChangeRateText } value={ newRating } />
                    </DialogBody>
                    <DialogFooter className='flex justify-center md:justify-end'>
                        <Button variant="text" color="gray" onClick={ handleOpenEdite } className="mr-1">
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={ hondelEdit }>
                            <span>Edite</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>
            <span className='text-gray-800 text-sm md:text-md'>{ review ? review.review : "" }</span>
            <div className='flex  justify-end gap-3 text-xs md:text-md text-blue-gray-600  my-2'>
                <div className='flex items-center gap-1'>
                    <FaGlobeAmericas /> <span>{ review ? review.createdAt.slice( 0, 10 ) : 0 }</span>
                </div>
                <div className='flex items-center gap-1'>
                    <FaRegClock /> <span>{ review ? review.createdAt.slice( 11, 16 ) : 0 }</span>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Comment