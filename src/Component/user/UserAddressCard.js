import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Tooltip } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import { notifyError } from '../../hook/useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAddress, editUserAddress } from '../../redux/actions/userAddressAction';
import { Spinner } from '@material-tailwind/react';

function UserAddressCard( { id, alias, details, city, phone, postalCode } ) {
    const dispatch = useDispatch();

    const [ loading, setLoading ] = useState( false )
    const [ loadingEdite, setLoadingEdite ] = useState( false )



    const [ aliasNew, setAliasNew ] = useState( "" )
    const [ detailsNew, setDetailsNew ] = useState( "" )
    const [ cityNew, setCityNew ] = useState( "" )
    const [ postalCodeNew, setPostalCodeNew ] = useState( "" )
    const [ phoneNew, setPhoneNew ] = useState( "" )


    const resDelete = useSelector( state => state.couponReducer.deleteCoupon )
    const [ open, setOpen ] = useState( false );
    const [ openEdit, setOpenEdite ] = useState( false );
    const handleOpen = () => { setOpen( !open ) };
    const handleOpenEdite = () => {

        setAliasNew( alias )
        setDetailsNew( details )
        setCityNew( city )
        setPostalCodeNew( postalCode )
        setPhoneNew( phone )

        setOpenEdite( !openEdit )
    }

    const handelDelete = async () => {
        setLoading( true )
        await dispatch( deleteUserAddress( id ) )
        setLoading( false )
        setOpen( !open )
        window.location.reload()
    }
    const handelEdit = async () => {
        if ( aliasNew === "" || detailsNew === "" || cityNew === "" || phoneNew === "" ) {
            notifyError( "invalid value" )
            return
        }
        setLoadingEdite( true )
        await dispatch( editUserAddress( id, {
            alias: aliasNew,
            details: detailsNew,
            phone: phoneNew,
            city: cityNew,
            postalCode: postalCodeNew
        } ) )
        setLoadingEdite( false )
        setOpen( !open )
        window.location.reload()
    }

    useEffect( () => {
        if ( !loading ) {
            if ( resDelete ) {
                console.log( "complate", resDelete )
            }
        }
    }, [ loading ] )
    return (
        <div className='container bg-white shadow-lg px-4 pt-10 pb-4 rounded-md my-6'>
            <div>

                <h1 className='text-md md:text-lg  text-blue-gray-800 my-2'><span className=' text-blue-gray-800 font-bold pl-2'>{ alias }</span></h1>
                <h1 className='text-sm md:text-md  text-blue-gray-600 my-2'>Address : <span className='text-blue-gray-800 font-bold pl-2'>{ details }</span></h1>
                <h1 className='text-sm md:text-md  text-blue-gray-600 my-2'>Phone number : <span className='text-blue-gray-800 font-bold pl-2'>{ phone }</span></h1>
                <h1 className='text-sm md:text-md  text-blue-gray-600 my-2'>City : <span className='text-blue-gray-800 font-bold pl-2'>{ city }</span></h1>
                <h1 className='text-sm md:text-md  text-blue-gray-600 my-2'>Postal Code : <span className='text-blue-gray-800 font-bold pl-2'>{ postalCode }</span></h1>
            </div>

            <div className='flex justify-end text-sm px-1 py-1 text-blue-gray-700'>
                <Tooltip content="Delete">
                    <span className='flex cursor-pointer text-white  bg-[#000000c2] p-[7px] rounded-lg mr-4' onClick={ handleOpen }><FaTrashAlt className='mr-1' /></span>
                </Tooltip>
                <Tooltip content="Edite">
                    <span className='flex cursor-pointer text-white  bg-[#000000c2] p-[7px] rounded-lg' onClick={ handleOpenEdite }><FaPencilAlt className='mr-1' /></span>
                </Tooltip>

            </div>

            <Dialog open={ open } handler={ handleOpen } className='w-full max-w-[90%] md:max-w-[40%]'>
                <DialogHeader>Confirm coupon delete</DialogHeader>
                <DialogBody divider>
                    Do you want to delete this addresses?<br />
                    This process cannot be undone.
                    { loading ?<div className='m-20'><Spinner className='w-[50px] h-[50px]'/></div> : <div></div> }
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
                <DialogHeader>Confirm address Edite</DialogHeader>
                <DialogBody divider>
                    Do you want to edit this address?<br />

                    { loadingEdite ? <div className='m-20'><Spinner className='w-[50px] h-[50px]'/></div> : <div></div> }
                </DialogBody>
                <DialogBody divider>
                    <div className='my-4'>
                        <Input label='Home or Work' value={ aliasNew } onChange={ ( e ) => setAliasNew( e.target.value ) } />
                    </div>
                    <div className='my-4'>
                        <Input label='Details Address' value={ detailsNew } onChange={ ( e ) => setDetailsNew( e.target.value ) } />
                    </div>
                    <div className='my-4'>
                        <Input type='number' label='Phone' value={ phoneNew } onChange={ ( e ) => setPhoneNew( e.target.value ) } />
                    </div>
                    <div className='my-4'>
                        <Input label='city' value={ cityNew } onChange={ ( e ) => setCityNew( e.target.value ) } />
                    </div>
                    <div className='my-4'>
                        <Input label='Postal code' value={ postalCodeNew } onChange={ ( e ) => setPostalCodeNew( e.target.value ) } />
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

export default UserAddressCard