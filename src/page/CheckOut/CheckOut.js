import React, { useEffect, useState } from 'react'
import { Button, Radio, Chip, Select, Option, Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserAddress } from '../../redux/actions/userAddressAction';
import { createOrderCARD, createOrderCash } from '../../redux/actions/checkoutActoins';
import { notifyError, notifySuccess, notifyWarning } from '../../hook/useNotification';
import { getAllUserCartItems } from '../../redux/actions/cartAction';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CheckOut() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [ address, setAddress ] = useState( "" )
    const [ loadingAddress, setLoadindAdress ] = useState( false )
    const [ check, setCheck ] = useState( "" )
    const [ press, setPress ] = useState( false )

    useEffect( () => {
        const getAdrees = async () => {
            setLoadindAdress( true )
            await dispatch( getAllUserAddress() )
            await dispatch( getAllUserCartItems() )
            setLoadindAdress( false )
        }
        getAdrees()
    }, [] )

    const resAdress = useSelector( state => state.userAddressesReducer.allAddresses )
    const resCart = useSelector( state => state.cartReducer.getAllUserCart )

    const handelAddress = ( e ) => {
        setAddress( e )
    }

    const resOrderCach = useSelector( state => state.checkoutReducer.createOrderCash )
    const resOrderCard = useSelector( state => state.checkoutReducer.createOrderCard )
    const createCashOrder = async () => {
        setLoadindAdress( true )
        if ( address !== "" && resCart && resCart.data && resCart.data._id ) {
            await dispatch( createOrderCash( resCart.data._id, {
                shippingAddress: {
                    details: address.details,
                    phone: address.phone,
                    city: address.city,
                    postalCode: address.postalCode
                }
            } ) )
            notifySuccess( "your order is complete" )
            setTimeout( () => {
                navigate( "/user/allorders" )
            }, 1500 )
        } else {
            notifyError( "chooose delivery address or maybe your cart is empty" )
        }
        setLoadindAdress( false )
    }


    const createCardOrder = async () => {
        setLoadindAdress( true )
        if ( address !== "" && resCart && resCart.data && resCart.data._id ) {
            await dispatch( createOrderCARD( resCart.data._id, {
                shippingAddress: {
                    details: address.details,
                    phone: address.phone,
                    city: address.city,
                    postalCode: address.postalCode
                }
            } ) )
            notifySuccess( "your order is complete" )

        } else {
            notifyError( "chooose delivery address or maybe your cart is empty" )
        }
        setLoadindAdress( false )
    }


    useEffect( () => {
        if ( !loadingAddress && press ) {
            if ( resOrderCard && resOrderCard.status && resOrderCard.status === 'success' && resOrderCard.session && resOrderCard.session.url ) {
                setPress( false )
                window.open( resOrderCard.session.url )

            } else {
                notifyError( "may be your location not available" )
                setPress( false )
            }
        }
    }, [ loadingAddress ] )




    const handelCheck = ( e ) => {
        setCheck( e.target.value )
    }

    const handelPay = () => {
        setPress( true )
        if ( check === "cash" ) {

            createCashOrder()
        } else if ( check === "card" ) {
            createCardOrder()

        }
        else {
            notifyWarning( "please choose pay method" )
        }
    }

    return (
        <div>

            <div className='container text-md md:text-xl  font-bold mb-2'>

                <h1 className='text-blue-gray-500 mt-10 '>Choose way that will pay</h1>
                <div className=' flex flex-col  bg-gray-100 p-10 my-10 paragraph  font-sans text-blue-gray-800 rounded-lg sm:rounded-2xl'>

                    <Radio id="card" value="card" name="type" label="Pay by credit card" onChange={ handelCheck } />
                    <Radio id="cash" value="cash" name="type" label="Pay when delivery" onChange={ handelCheck } />
                    <div className=' py-4'>
                        <Select className='' label='Delivery address' onChange={ handelAddress }>
                            { resAdress && resAdress.data && resAdress.data.length > 0 && !loadingAddress ?
                                resAdress.data.map( ( item, index ) => {
                                    return <Option key={ index } value={ item }>{ item.alias } : { item.city }-{ item.details } </Option>
                                } )
                                : <div></div>
                            }

                        </Select>

                    </div>

                    { loadingAddress ? <Spinner className='w-[45px] h-[45px]' /> : <div></div> }
                </div>
                <div className='container'>
                    { resCart && resCart.data && resCart.data.totalCartPrice ?
                        resCart.data.totalCartPrice && resCart.data.totalAfterDiscount ?
                            <Chip value={ "total price after discount: " + resCart.data.totalAfterDiscount + " $" } color='green' variant="ghost" className='text-center py-3 my-2' />
                            :
                            <Chip value={ "total price: " + resCart.data.totalCartPrice + "$" } className='text-center py-3 my-2' variant="ghost" />
                        : <Spinner className='w-[45px] h-[45px]' />
                    }
                    <Button className='mr-2' onClick={ handelPay }>Complate</Button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CheckOut