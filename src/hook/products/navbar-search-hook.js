import React, { useEffect, useState } from 'react'
import ViewSreachProductsHook from './view-sreach-products-hook';
import { useLocation, useNavigate } from 'react-router-dom';

function NavSearchHook() {
    const [ items, getPage, getProduc ] = ViewSreachProductsHook();
    const location = useLocation();
    const navigate = useNavigate();


    const [ searchWord, setSearch ] = useState( "" );
    let word = "";
    if ( localStorage.getItem( "searchWord" ) != null )
        word = localStorage.getItem( "searchWord" )
    const onChangeSearch = ( e ) => {
        localStorage.setItem( "searchWord", e.target.value )
        setSearch( e.target.value )
        getProduc( e.target.value )
    }
    useEffect( () => {

        setSearch( word )
        
        if ( searchWord != "" && location.pathname !== "/AllProudct" ) {
            navigate( "/AllProudct" )
        }
        setTimeout( () => {
            getProduc( word )
        }, 800 )
    }, [ searchWord ] )
    return [ searchWord, onChangeSearch ]

}

export default NavSearchHook