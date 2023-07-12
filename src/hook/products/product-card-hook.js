import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notifyError, notifySuccess } from '../useNotification';
import { addProductToWishList, removeProductToWishList } from '../../redux/actions/wishListAction';

function ProductCardHook( id, favProduct ) {

    const [ Fav, setFav ] = useState( false )
    const dispatch = useDispatch();
    let isFav = favProduct.some( fitem => fitem === id )

    const handelFav = () => {
        setFav( !Fav )
        if ( !Fav && localStorage.getItem( "token" ) != null ) {
            addToWishListData();
        }
        else if ( Fav && localStorage.getItem( "token" ) != null ) {
            removeToWhishListData();
        }
        else if ( localStorage.getItem( "token" ) === null ) {
            notifyError( "you are logged out, the product not saved in your wish list" )
        }

    }

    useEffect( () => {
        if ( isFav ) {
            setFav( true )
        } else {
            setFav( false )
        }
    }, [ isFav ] )


    const resAdd = useSelector( state => state.addToWishListReducer.addWishList )
    const resRemove = useSelector( state => state.addToWishListReducer.removeWishList )

    const addToWishListData = async () => {
        await dispatch( addProductToWishList( {
            productId: id
        } ) )
        if ( resAdd && resAdd.status && resAdd.status === 200 ) {
            notifySuccess( "add complete to your wishlist" )
        }
    }

    const removeToWhishListData = async () => {
        await dispatch( removeProductToWishList( id ) )
        if ( resRemove && resRemove.message && resRemove.message === "Product removed successfully to your wishlist" ) {
            notifySuccess( "Delete complete from your wishlist" )
        }
    }
    return [ handelFav, Fav ]
}

export default ProductCardHook