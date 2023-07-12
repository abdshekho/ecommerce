import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, getAllUserCartItems } from '../../redux/actions/cartAction';
import { useEffect } from 'react';
import { notifyError, notifySuccess, notifyWarning } from '../useNotification';
import GetAllUserCart from './get-all-user-cart-hook';


function AddToCartFromCardHook( id ) {
    const dispatch = useDispatch();

    const [ loadingAdd, setLoadingAdd ] = useState( false );
    const [ pressAdd, setPressAdd ] = useState( false );

    const resAddToCart = useSelector( state => state.cartReducer.addToCart )
    const handelAddToCart = async () => {
        setPressAdd( true )
        setLoadingAdd( true )

        await dispatch( addProductToCart( {
            productId: id,
            color: "#ffffff"
        } ) )
        setLoadingAdd( false )
    }
    useEffect( () => {
        if ( !loadingAdd && pressAdd ) {
            if ( resAddToCart && resAddToCart.status === 200 && resAddToCart.data && resAddToCart.data.data ) {
                notifySuccess( "added complate" )
                dispatch( getAllUserCartItems() )
                setPressAdd( false );



            } else {
                notifyError( "check your account" )
                setPressAdd( false )
            }

        }
    }, [ loadingAdd ] )

    return [ handelAddToCart, loadingAdd ]
}

export default AddToCartFromCardHook