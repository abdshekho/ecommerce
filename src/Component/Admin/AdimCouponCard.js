import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Tooltip } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCoupon, editCoupon } from '../../redux/actions/couponAction';
import Spinner from '../utility/Spinner';
import { notifyError, notifyWarning } from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';

function AdimCouponCard( { id, couponName, couponDate, couponValue, createAt } ) {
    const dispatch = useDispatch();


    const [ loading, setLoading ] = useState( false )
    const [ loadingEdite, setLoadingEdite ] = useState( false )
    const [ couponNameNew, setCouponNameNew ] = useState( "" );
    const [ couponDateNew, setCouponDateNew ] = useState( "" );
    const [ couponValuenew, setCouponValueNew ] = useState( "" );
    const resDelete = useSelector( state => state.couponReducer.deleteCoupon )
    const [ open, setOpen ] = useState( false );
    const [ openEdit, setOpenEdite ] = useState( false );
    const handleOpen = () => { setOpen( !open ) };
    const handleOpenEdite = () => {
        setCouponNameNew( couponName )
        setCouponDateNew( couponDate )
        setCouponValueNew( couponValue )
        setOpenEdite( !openEdit )
    }

    const handelDelete = async () => {
        setLoading( true )
        await dispatch( deleteCoupon( id ) )
        setLoading( false )
        setOpen( !open )
        window.location.reload()
    }
    const handelEdit = async () => {
        if ( couponNameNew === "" || couponDateNew === "" || Number( couponValuenew ) > 99 ) {
            notifyError( "invalid value" )
            return
        }
        setLoadingEdite( true )
        await dispatch( editCoupon( id, {
            name: couponNameNew,
            expire: couponDateNew,
            discount: couponValuenew
        } ) )
        setLoadingEdite( false )
        setOpen( !open )
        window.location.reload()
    }

    useEffect( () => {
        if ( !loading ) {
            if ( resDelete ) {
            }
        }
    }, [ loading ] )
    return (
        <div className='container bg-white shadow-lg px-4 pt-10 pb-4 rounded-md my-6'>
            <div>

                <h1 className='text-sm md:text-md  text-blue-gray-600 my-2'>Name of coupon :  <span className=' text-blue-gray-800 font-bold pl-2'>{ couponName }</span></h1>
                <h1 className='text-sm md:text-md  text-blue-gray-600 my-2'>Created at : <span className='text-blue-gray-800 font-bold pl-2'>{ createAt }</span></h1>
                <h1 className='text-sm md:text-md  text-blue-gray-600 my-2'>date finished : <span className='text-blue-gray-800 font-bold pl-2'>{ couponDate }</span></h1>
                <h1 className='text-sm md:text-md  text-blue-gray-600 my-2'>discount percentage : <span className='text-blue-gray-800 font-bold pl-2'>{ couponValue }%</span></h1>
            </div>
            { true ?
                <div className='flex justify-end text-sm px-1 py-1 text-blue-gray-700'>
                    <Tooltip content="Delete">
                        <span className='flex cursor-pointer text-white  bg-tooltip p-[7px] rounded-lg mr-4' onClick={ handleOpen }><FaTrashAlt className='mr-1' /></span>
                    </Tooltip>
                    <Tooltip content="Edite">
                        <span className='flex cursor-pointer text-white  bg-tooltip p-[7px] rounded-lg' onClick={ handleOpenEdite }><FaPencilAlt className='mr-1' /></span>
                    </Tooltip>

                </div> : <div></div> }

            <Dialog open={ open } handler={ handleOpen } className='w-full max-w-[90%] md:max-w-[40%]'>
                <DialogHeader>Confirm coupon delete</DialogHeader>
                <DialogBody divider>
                    Do you want to delete this prodcut?<br />
                    This process cannot be undone.
                    { loading ? <Spinner /> : <div></div> }
                </DialogBody>
                <DialogFooter className='flex justify-center md:justify-end'>
                    <Button variant="text" color="gray" onClick={ handleOpen } className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="red" onClick={ handelDelete }>
                        <span>Delete</span>
                    </Button>
                </DialogFooter>
            </Dialog>


            <Dialog open={ openEdit } handler={ handleOpenEdite } className='w-full max-w-[90%] md:max-w-[40%]'>
                <DialogHeader>Confirm coupon Edite</DialogHeader>
                <DialogBody divider>
                    Do you want to edit this coupon?<br />

                    { loadingEdite ? <Spinner /> : <div></div> }
                </DialogBody>
                <DialogBody divider>
                    <div className='my-3'>

                        <Input label='Name of coupon' value={ couponNameNew } onChange={ ( e ) => setCouponNameNew( e.target.value ) } />
                    </div>
                    <div className='my-3'>

                        <Input type='date' label='date finished' value={ couponDateNew } onChange={ ( e ) => setCouponDateNew( e.target.value ) } />
                    </div>
                    <div className='my-3'>

                        <Input label='Name of coupon' value={ couponValuenew } onChange={ ( e ) => setCouponValueNew( e.target.value ) } />
                    </div>

                </DialogBody>
                <DialogFooter className='flex justify-center md:justify-end'>
                    <Button variant="text" color="gray" onClick={ handleOpenEdite } className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={ handelEdit }>
                        <span>Edite</span>
                    </Button>
                </DialogFooter>
            </Dialog>
            <ToastContainer />
        </div>
    )
}

export default AdimCouponCard