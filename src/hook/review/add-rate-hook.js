import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json, useNavigate } from 'react-router-dom';
import { notifyError, notifySuccess, notifyWarning } from '../useNotification';
import { createReview } from '../../redux/actions/reviewActon';


function AddRateHook( id ) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ rateText, setRateText ] = useState( "" );
    const [ rateValue, setRateValue ] = useState( 0 )

    const [ loading, setLoading ] = useState( true );

    const onChangeRateText = ( e ) => {
        setRateText( e.target.value )
    }
    const onChangeRateValue = ( value ) => {
        setRateValue( value )
    }

    let user = ""
    if ( localStorage.getItem( "user" ) != null )
        user = JSON.parse( localStorage.getItem( "user" ) )

    const onsubmite = async () => {
        if ( rateText === '' ) {
            notifyWarning( 'enter comment' )
            return
        }
        if ( user && user.role && user.role === "admin" ) {
            notifyError( "you Registered as an admin account don't have permission to Rate that" )
            return
        }

        if ( user === "" ) {
            notifyWarning( 'check your accoutn' )
            return
        }
        if ( rateValue === 0 || Number( rateValue ) === 0.5 ) {
            notifyWarning( 'Enter Rating' )
            return
        }
        setLoading( true )
        await dispatch( createReview( id, {
            review: rateText,
            rating: rateValue
        } ) )
        setLoading( false )
        window.location.reload()
    }


    const res = useSelector( state => state.reviewReducer.createView )

    useEffect( () => {
        if ( !loading ) {
            if ( res && res.status && res.status === 403 ) {
                notifyWarning( "you are registered via Admin account so can't Rate" )
            } else if ( res && res.data && res.data.errors && res.data.errors[ 0 ].msg === "You already added review on this product" ) {
                notifyWarning( "You already added review on this product" )
            } else if ( res && res.status && res.status === 201 ) {
                notifySuccess( "Add Rate success" )

            }
        }
    }, [ loading ] )
    return [ onChangeRateText, onChangeRateValue, rateText, rateValue, user, onsubmite ]
}

export default AddRateHook