import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import ViewSreachProductsHook from './view-sreach-products-hook';

function SidebarSearchHook() {
    const [ items, getPage, getProduc ] = ViewSreachProductsHook()
    const [ From, setPriceFrom ] = useState( 0 )
    const [ To, setToFrom ] = useState( 0 )

    const dispatch = useDispatch();
    useEffect( () => {
        const get = async () => {

            await dispatch( getAllCategory() )
            await dispatch( getAllBrand() )
        }
        get()
        if ( localStorage.getItem( "priceFrom" ) !== null ) {
            setPriceFrom( localStorage.getItem( "priceFrom" ) )
        }
        if ( localStorage.getItem( "priceTo" ) !== null ) {
            setToFrom( localStorage.getItem( "priceTo" ) )
        }
    }, [] )
    const allCat = useSelector( state => state.allCategory.category )
    const allBrand = useSelector( state => state.allBrand.brand )

    //to get category
    let category = [];
    if ( allCat && allCat.data )
        category = allCat.data

    //to get brand
    let brand = [];
    if ( allBrand && allBrand.data )
        brand = allBrand.data

    const [ categoryCheck, setCategoryCheck ] = useState( [] )
    const [ brnadyCheck, setBrnadyCheck ] = useState( [] )

    let queryCategroy = []
    let queryBrand = []

    const clickCategory = ( e ) => {
        let value = e.target.value;

        if ( value === "All" ) {
            setCategoryCheck( [] )
        } else {
            if ( e.target.checked ) {
                setCategoryCheck( [ ...categoryCheck, value ] )
            }
            else if ( !e.target.checked ) {
                const newArray = categoryCheck.filter( ( e ) => e !== value )
                setCategoryCheck( newArray )
            }
        }
    }
    useEffect( () => {
        queryCategroy = categoryCheck.map( val => "category[in][]=" + val ).join( "&" )
        localStorage.setItem( "catCecked", queryCategroy )
        setTimeout( () => {
            getProduc();
        }, 1000 );
    }, [ categoryCheck ] )

    const clickBrand = ( e ) => {
        let value = e.target.value;

        if ( value === "All" ) {
            setBrnadyCheck( [] )
        } else {

            if ( e.target.checked ) {
                setBrnadyCheck( [ ...brnadyCheck, value ] )
            }
            else if ( !e.target.checked ) {
                const newArray = brnadyCheck.filter( ( e ) => e !== value )
                setBrnadyCheck( newArray )
            }

        }
    }
    useEffect( () => {
        queryBrand = brnadyCheck.map( val => "brand[in][]=" + val ).join( "&" )
        localStorage.setItem( "brandCecked", queryBrand )
        setTimeout( () => {
            getProduc();
        }, 1000 );
    }, [ brnadyCheck ] )


    const priceFrom = ( e ) => {
        localStorage.setItem( "priceFrom", e.target.value )

        setPriceFrom( e.target.value )

    }
    const priceTo = ( e ) => {
        localStorage.setItem( "priceTo", e.target.value )
        setToFrom( e.target.value )

    }


    useEffect( () => {
        setTimeout( () => {
            getProduc();
        }, 1000 );
    }, [ From, To ] )


    return [ category, brand, clickCategory, clickBrand, priceFrom, priceTo, From, To ]
}

export default SidebarSearchHook