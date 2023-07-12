import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, getAllUserCartItems } from '../../redux/actions/cartAction';
import { useEffect } from 'react';
import { notifyError, notifySuccess, notifyWarning } from '../useNotification';
import GetAllUserCart from './get-all-user-cart-hook';


function AddToCartHook( id, colors ) {
    const dispatch = useDispatch();
    const [ colorChoose, setColorChoose ] = useState( "" );
    const [ loadingAdd, setLoadingAdd ] = useState( false );
    const [ pressAdd, setPressAdd ] = useState( false );
    const handelColro = ( item ) => {
        setColorChoose( item )
    }
    const resAddToCart = useSelector( state => state.cartReducer.addToCart )
    const handelAddToCart = async () => {
        setPressAdd( true )
        setLoadingAdd( true )
        if ( colorChoose === "" && colors && colors.length !== 0 ) {
            notifyWarning( "you do't choose a color" )
            setLoadingAdd( false )
            return
        }
        await dispatch( addProductToCart( {
            productId: id,
            color: colorChoose
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

    return [ colorChoose, handelColro, handelAddToCart, loadingAdd ]
}

export default AddToCartHook