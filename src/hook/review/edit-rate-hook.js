import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { notifySuccess, notifyWarning } from '../useNotification';
import { createReview, deleteReviewOnProduct, updateReviewOnProduct } from '../../redux/actions/reviewActon';

function EditRateHook( review ) {
    const dispatch = useDispatch();


    const [ loading, setLoading ] = useState( true );
    const [ openEdite, setOpenEdite ] = useState( false );
    const [ newRating, setNewRating ] = useState( review.review );
    const [ newRatingValue, setNewRatingValu ] = useState( review.rating );
    const handleOpenEdite = () => { setOpenEdite( !openEdite ) };
    const onChangeRateText = ( e ) => {
        setNewRating( e.target.value )
    }
    const onChangeRateValue = ( e ) => {
        setNewRatingValu( e )
    }

    const hondelEdit = async ( e ) => {
        if ( newRating === '' ) {
            setOpenEdite( !openEdite )
            notifyWarning( 'enter comment' )
            return
        }

        if ( newRatingValue === 0 || Number( newRatingValue ) === 0.5 ) {
            setOpenEdite( !openEdite )
            notifyWarning( 'Enter Rating' )
            return
        }

        setLoading( true )
        await dispatch( updateReviewOnProduct( review._id, {
            review: newRating,
            rating: newRatingValue
        } ) )
        setLoading( false )
        setOpenEdite( !openEdite )
        window.location.reload()

    }
    const res = useSelector( state => state.reviewReducer.updateReview )
    useEffect( () => {
        if ( !loading ) {
            if ( res && res.status && res.status === 200 ) {
                setOpenEdite( !openEdite )
                notifySuccess( 'Edite complete' )
            } else {
                notifyWarning( "Error in Edite Rate .." )
                return
            }

        }
    }, [ loading ] )
    return [ hondelEdit, handleOpenEdite, openEdite, setOpenEdite, onChangeRateText, newRating, onChangeRateValue, newRatingValue ]
}

export default EditRateHook