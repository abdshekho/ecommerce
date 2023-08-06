import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { applayCoupnCart, deleteCartItem, getAllUserCartItems, updateCartItem } from '../../redux/actions/cartAction';
import { notifyError, notifySuccess } from '../../hook/useNotification';

function ApplyCopon( idCartItem, count ) {
    const [ couponName, setCouponName ] = useState( "" );
    const [ loaingCopon, setLodingCopon ] = useState( false );
    const dispatch = useDispatch();


    const applyCopno = async () => {
        setLodingCopon( true )

        if ( couponName != "" && couponName ) {

            await dispatch( applayCoupnCart( {
                couponName: couponName
            } ) )
            window.location.reload()
        }
        setLodingCopon( false )
        // window.location.reload()

    }
    const [ priceAfterDiscount, setPriceAfterDiscount ] = useState( 0 );
    // const [ loaingCopon, setLodingCopon ] = useState( false );
    const resUpdateCart = useSelector( state => state.cartReducer.updateItem );
    const resGetCart = useSelector( state => state.cartReducer.getAllUserCart );
    const applayCoupon = useSelector( state => state.cartReducer.applayCoupon );



    useEffect( () => {
        if ( !loaingCopon ) {
            if ( applayCoupon && applayCoupon.data && applayCoupon.data.data && applayCoupon.data.data.totalAfterDiscount && applayCoupon.status && applayCoupon.status === 200 ) {
                setPriceAfterDiscount( applayCoupon.data.data.totalAfterDiscount )
            }

        }

    }, [ applayCoupon ] )
    useEffect( () => {
        if ( !loaingCopon ) {
            if ( applayCoupon && applayCoupon.data && applayCoupon.data.data && applayCoupon.data.data.totalAfterDiscount && applayCoupon && applayCoupon.status && applayCoupon.status === 200 ) {
                notifySuccess( "The coupon active" )
            } else if ( applayCoupon && applayCoupon.status && applayCoupon.status === 400 && couponName && couponName !== "" ) {
                notifyError( "invalid coupon" )
            }
        }
    }, [ loaingCopon ] )
    
    const [ totalCartPrice, setTotalPrice ] = useState( 0 );
    useEffect( () => {
        if ( resUpdateCart && resUpdateCart.data && resUpdateCart.data.data && resUpdateCart.data.data.totalCartPrice ) {
            setTotalPrice( resUpdateCart.data.data.totalCartPrice )
        }
        if ( resUpdateCart && resUpdateCart.data && resUpdateCart.data.data && resUpdateCart.data.data.totalAfterDiscount ) {
            setPriceAfterDiscount( resUpdateCart.data.data.totalAfterDiscount )
        }
    }, [ resUpdateCart ] )

    useEffect( () => {

        if ( resGetCart && resGetCart.data && resGetCart.data.products ) {
            setTotalPrice( resGetCart.data.totalCartPrice )
        }
        if ( resGetCart && resGetCart.data && resGetCart.data.products && resGetCart.data.totalCartPrice ) {
            setTotalPrice( resGetCart.data.totalCartPrice )
        }
        if ( resGetCart && resGetCart.data && resGetCart.data.totalAfterDiscount ) {
            setPriceAfterDiscount( resGetCart.data.totalAfterDiscount )
            if ( resGetCart.data.coupon ) {
                setCouponName( resGetCart.data.coupon )
            }

        }
    }, [ resGetCart ] )
    const onChange = ( { target } ) => setCouponName( target.value );
    const [ loadingDelete, setLoadingDelete ] = useState( false )
    const [ loadingCount, setLoadingCount ] = useState( false )
    const [ newCount, setNewCount ] = useState( 1 );
    const handelCount = async () => {
        setLoadingCount( true )
        await dispatch( updateCartItem( idCartItem, {
            count: newCount
        } ) )

        if ( couponName != "" && couponName ) {

            await dispatch( applayCoupnCart( {
                couponName: couponName
            } ) )

        }
        setLoadingCount( false )


    }
    useEffect( () => {
        setNewCount( count )
    }, [] )
    const handleDelete = async () => {
        setLoadingDelete( true )
        await dispatch( deleteCartItem( idCartItem ) )
        await dispatch( getAllUserCartItems() )

        if ( couponName != "" && couponName ) {

            await dispatch( applayCoupnCart( {
                couponName: couponName
            } ) )

        }

        setLoadingDelete( false )
    }
    return [ applyCopno, couponName, setCouponName, totalCartPrice, priceAfterDiscount, loaingCopon, onChange, setLodingCopon, newCount, handelCount, handleDelete, loadingDelete, setNewCount, loadingCount ]
}

export default ApplyCopon