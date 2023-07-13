import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';

function CardContainerHook() {
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState( true )
    const [ favProduct, setFavProduct ] = useState( [] )
    const res = useSelector( state => state.addToWishListReducer.allWishList )

    useEffect( () => {
        const get = async () => {
            setLoading( true )
            await dispatch( getProductWishList() )
            setLoading( false )
        }

        get()
    }, [] )

    useEffect( () => {
        if ( !loading ) {
            if ( res && res.data && res.data.length !== 0 && localStorage.getItem( 'token' ) != null ) {
                setFavProduct( res.data.map( item => item._id ) )
            }
        }

    }, [ loading ] )
    return [ favProduct ]
}

export default CardContainerHook