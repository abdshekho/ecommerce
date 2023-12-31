import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
import { Spinner } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import CardProductsConainerFavorite from '../../Component/Products/CardProductsConainerFavorite';
import AdminSdieBar from '../../Component/Admin/AdminSdieBar';
function AdmiFavoritPage() {
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState( false );
    const [ items, setItems ] = useState( [] )
    useEffect( () => {
        const get = async () => {

            setLoading( true )
            await dispatch( getProductWishList() )
            setLoading( false )
        }
        get();
    }, [] )
    const res = useSelector( state => state.addToWishListReducer.allWishList )
    useEffect( () => {
        if ( !loading ) {
            if ( res && res.data ) {
                setItems( res.data )
            }

        }
    }, [ loading ] )

    return (
        <div className=''>

            <div className='grid grid-cols-12'>
                <div className="col-start-1 col-end-4 md:col-end-3">

                    <AdminSdieBar />
                </div>

                <div className='col-start-4 md:col-start-3 col-end-13 pt-10'>
                    { !loading ?
                        items && items.length !== 0 ?
                            <CardProductsConainerFavorite titleOfBar={ "All favorite products" } prodcuts={ items } />
                            : <Typography className="text-center" variant="h5" color="gray">you don't have  favorite products yet</Typography> :
                        <div className='m-20'><Spinner className='w-[50px] h-[50px]' /></div>
                    }

                </div>
            </div>
            {/* <Pagination /> */ }

        </div>
    )
}

export default AdmiFavoritPage