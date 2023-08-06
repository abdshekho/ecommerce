import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from './../../redux/actions/productsAtion';
const ViewAllProductsCategoryHook = ( catID ) => {

    let limit = 8;
    const dispatch = useDispatch();
    const [ loading, setLoding ] = useState( false )

    const getProduct = async () => {
        setLoding( true )
        await dispatch( getAllProductsByCategory( '', limit, catID ) )
        setLoding( false )
    }
    useEffect( () => {
        getProduct()
    }, [] )

    //when click pagination
    const onPress = async ( page ) => {
        setLoding( true )
        await dispatch( getAllProductsByCategory( page, limit, catID ) )
        setLoding( false )
    }

    const allProducts = useSelector( ( state ) => state.allproduts.allProductCat )

    let items = []; let pagination = [];
    try {
        if ( allProducts.data )
            items = allProducts.data;
        else
            items = []
    } catch ( e ) {}
    try {
        if ( allProducts.paginationResult )
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch ( e ) {}


    return [ items, pagination, onPress, loading ]
}

export default ViewAllProductsCategoryHook