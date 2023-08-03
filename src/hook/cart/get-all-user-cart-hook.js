import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserCartItems } from '../../redux/actions/cartAction';

function GetAllUserCart() {
    const dispatch = useDispatch();
    const [ loadingGet, setLoadignGet ] = useState( false )
    const [ itemNum, setItemsNum ] = useState( 0 )
    const [ cartItem, setCartItem ] = useState( 0 )

    let user = "";
    if ( localStorage.getItem( "user" ) )
        user = JSON.parse( localStorage.getItem( "user" ) )


    useEffect( () => {
        const get = async () => {
            setLoadignGet( true )
            await dispatch( getAllUserCartItems() )
            setLoadignGet( false )
        }
        if ( user && user.role && user.role === "user" )
            get();
    }, [] )


    const resGetCart = useSelector( state => state.cartReducer.getAllUserCart )

    useEffect( () => {
        if ( !loadingGet ) {
            if ( resGetCart && resGetCart.status === "success" && resGetCart.numOfCartItems ) {
                setItemsNum( resGetCart.numOfCartItems )
                setCartItem( resGetCart.data.products )
            } else {
                setItemsNum( 0 )

            }
        }
    }, [ loadingGet ] )

    return [ itemNum, cartItem, loadingGet ]
}

export default GetAllUserCart