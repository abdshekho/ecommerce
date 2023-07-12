import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByBrand, getAllProductsByCategory } from './../../redux/actions/productsAtion';
const ViewAllProductsBarndHook = ( brandID ) => {
    let limit = 8;
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState( false )

    const getProduct = async () => {
        setLoading( true )
        await dispatch( getAllProductsByBrand( '', limit, brandID ) )
        setLoading( false )
    }
    useEffect( () => {
        setLoading( true )
        getProduct()
        setLoading( false )
    }, [] )

    //when click pagination
    const onPress = async ( page ) => {
        await dispatch( getAllProductsByBrand( page, limit, brandID ) )
    }

    const allBrand = useSelector( ( state ) => state.allproduts.allProductBrand )

    let items = []; let pagination = [];
    try {
        if ( allBrand.data )
            items = allBrand.data;
        else
            items = []
    } catch ( e ) {}
    try {
        if ( allBrand.paginationResult )
            pagination = allBrand.paginationResult.numberOfPages;
        else
            pagination = []
    } catch ( e ) {}


    return [ items, pagination, onPress, loading ]
}

export default ViewAllProductsBarndHook