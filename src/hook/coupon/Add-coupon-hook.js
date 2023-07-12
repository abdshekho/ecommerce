import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCoupon, getAllCoupon } from '../../redux/actions/couponAction';
import { useEffect } from 'react';
import { notifyError, notifySuccess, notifyWarning } from '../useNotification';

function AddCouponHook() {
    const [ couponName, setCouponName ] = useState( "" );
    const [ couponDate, setCouponDate ] = useState( "" );
    const [ couponValue, setCouponValue ] = useState( "" );
    const [ loading, setLoading ] = useState( false );
    const [ loadingGetCoupon, setLoadingGetCoupon ] = useState( false );


    const dispatch = useDispatch()

    const onChangeName = ( e ) => {
        setCouponName( e.target.value )
    }

    const onChangeDate = ( e ) => {
        setCouponDate( e.target.value )
    }

    const onChangeValue = ( e ) => {
        setCouponValue( e.target.value )
    }

    const resAdd = useSelector( state => state.couponReducer.addCoupon )
    const resget = useSelector( state => state.couponReducer.allCoupon )
    const allCoupon = resget && resget.data && resget.data.length > 0 ? resget.data : ""
    useEffect( () => {
        const get = async () => {
            setLoadingGetCoupon( true )
            await dispatch( getAllCoupon() )
            setLoadingGetCoupon( false )
        }
        get();
    }, [] )

    const onSubmit = async () => {
        if ( couponName.length < 2 || couponValue < 0 || couponDate.length === 0 ) {
            notifyError( "invalid value" )
            return
        }

        setLoading( true )
        await dispatch( addCoupon( {
            name: couponName,
            expire: couponDate,
            discount: couponValue

        } ) )
        setLoading( false )
    }

    useEffect( () => {
        if ( !loading ) {
            if ( resAdd && resAdd.status === 201 && resAdd.statusText === 'Created' ) {
                notifySuccess( 'add coupon done successfully' );
                // setCouponDate( "" ); setCouponName( "" ); setCouponValue( "" )
                window.location.reload()
            } else if ( resAdd && resAdd.status ) {
                notifyWarning( "chek your value" )
            }
        }

    }, [ loading ] )




    return [ couponName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit, loading, allCoupon, loadingGetCoupon ]
}

export default AddCouponHook