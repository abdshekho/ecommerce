import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';

function CardContainerHook() {
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState( true )
    const [ favProduct, setFavProduct ] = useState( [] )
    const res = useSelector( state => state.addToWishListReducer.allWishList )
    console.log( res )
    let user = "";
    if ( localStorage.getItem( "user" ) )
        user = JSON.parse( localStorage.getItem( "user" ) )

    useEffect( () => {
        const get = async () => {
            setLoading( true )
            if ( user )
                await dispatch( getProductWishList() )
            setLoading( false )
        }

        get()
    }, [] )

    useEffect( () => {
        if ( !loading ) {
            if ( res && res.data && res.data.length !== 0 && localStorage.getItem( 'token' ) != null ) {
                setFavProduct( res?.data?.map( item => item._id ) )
            }
        }

    }, [ loading ] )
    return [ favProduct, loading ]
}

export default CardContainerHook