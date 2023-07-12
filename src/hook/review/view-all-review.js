import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allReviewProduct } from '../../redux/actions/reviewActon';

function ViewAllReview( id ) {
    let limit = 5;
    const dispatch = useDispatch();
    const [ loading, setLoadin ] = useState( true );

    const allReview = useSelector( state => state.reviewReducer.allReviewProduct )


    useEffect( () => {
        setLoadin( true )
        dispatch( allReviewProduct( id, 1, limit ) )
        setLoadin( false )
    }, [] )

    const onPress = async ( page ) => {
        await dispatch( allReviewProduct( id, page, limit ) )

    }

    return [ allReview, onPress ]
}

export default ViewAllReview