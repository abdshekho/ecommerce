import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { notifySuccess, notifyWarning } from '../useNotification';
import { createReview, deleteReviewOnProduct } from '../../redux/actions/reviewActon';

function DeleteRateHook( review ) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState( true );
    const [ open, setOpen ] = useState( false );
    const handleOpen = () => { setOpen( !open ) };


    const handleDelte = async () => {


        setLoading( true )
        await dispatch( deleteReviewOnProduct( review._id ) )
        setLoading( false )
        setOpen( !open )
        window.location.reload()
    }
    const res = useSelector( state => state.reviewReducer.deleteReview )
    useEffect( () => {
        if ( !loading ) {
            if ( res === "" ) {
                notifySuccess( 'Delete complete' )
            } else {
                notifyWarning( "Error in Delete Rate .." )
                return
            }
        }
    }, [ loading ] )
    return [ handleDelte, handleOpen, open, setOpen ]
}

export default DeleteRateHook