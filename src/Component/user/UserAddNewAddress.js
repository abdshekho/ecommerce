import { Button, Input, Textarea } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUserAddress } from '../../redux/actions/userAddressAction';
import { notifySuccess } from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
// import Spinner from '../utility/Spinner';
import { Spinner } from '@material-tailwind/react';

function UserAddNewAddress( { title, titleButton } ) {
    const dispatch = useDispatch();
    const resPost = useSelector( state => state.userAddressesReducer.addUserAddress )
    const [ alias, setAlias ] = useState( "" )
    const [ details, setDetails ] = useState( "" )
    const [ city, setCity ] = useState( "" )
    const [ postalCode, setPostalCode ] = useState( "" )
    const [ phone, setPhone ] = useState( "" )
    const [ press, setPress ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    const handelSubmite = async () => {
        setLoading( true )
        setPress( true )
        await dispatch( addUserAddress( {
            alias: alias,
            details: details,
            phone: phone,
            city: city,
            postalCode: postalCode
        } ) )
        setLoading( false )
    }
    useEffect( () => {
        if ( !loading && press ) {
            if ( resPost && resPost.status && resPost.status === 200  ) {
                notifySuccess( "Add new Address successfully" )
                setAlias( "" )
                setDetails( "" )
                setCity( "" )
                setPostalCode( "" )
                setPhone( "" )

            }
        }
    }, [ loading ] )

    return (
        <div className='container'>
            <h1 className='text-md md:text-xl  font-bold mb-1  text-blue-gray-700'>{ title }</h1>
            <div className='bg-white container py-10 rounded-xl my-6'>
                <div className='my-4'>
                    <Input label='Home or Work' value={ alias } onChange={ ( e ) => setAlias( e.target.value ) } />
                </div>
                <div className='my-4'>
                    <Input label='Details Address' value={ details } onChange={ ( e ) => setDetails( e.target.value ) } />
                </div>
                <div className='my-4'>
                    <Input type='number' label='Phone' value={ phone } onChange={ ( e ) => setPhone( e.target.value ) } />
                </div>
                <div className='my-4'>
                    <Input label='city' value={ city } onChange={ ( e ) => setCity( e.target.value ) } />
                </div>
                <div className='my-4'>
                    <Input label='Postal code' value={ postalCode } onChange={ ( e ) => setPostalCode( e.target.value ) } />
                </div>
                <Button onClick={ handelSubmite }>{ titleButton }</Button>
            </div>
            { loading ? <div className='m-20'><Spinner className='w-[50px] h-[50px]' /></div> : <div></div> }
            <ToastContainer />
        </div>
    )
}

export default UserAddNewAddress