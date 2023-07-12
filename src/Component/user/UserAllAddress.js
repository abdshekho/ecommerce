import React, { useEffect, useState } from 'react'
import UserAddressCard from './UserAddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserAddress } from '../../redux/actions/userAddressAction';
import { Spinner } from '@material-tailwind/react';
function UserAllAddress( { titlePage } ) {
    const dispatch = useDispatch();
    const resGet = useSelector( state => state.userAddressesReducer.allAddresses )

    const [ loading, setLoading ] = useState( false )

    useEffect( () => {
        const get = async () => {
            setLoading( true )
            await dispatch( getAllUserAddress() )
            setLoading( false )
        }
        get();
    }, [] )



    return (
        <div className='container'>
            <h1 className='text-md md:text-xl  font-bold mb-1  text-blue-gray-700'>{ titlePage }</h1>
            { loading ? <div className='m-20'><Spinner className='w-[50px] h-[50px]'/></div> : <div></div> }
            { resGet && resGet.data && resGet.data.length !== 0 ?
                resGet.data.map( ( item, index ) => {
                    return <UserAddressCard key={index} id={ item._id } alias={ item.alias } details={ item.details } city={ item.city } postalCode={ item.postalCode } phone={ item.phone } />
                } )
                : <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-700 text-center my-10">you don't added any Address</h5>
            }


        </div>
    )
}

export default UserAllAddress