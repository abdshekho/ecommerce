import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

function ScrolTopWrapper( { children } ) {
    const location = useLocation();
    useLayoutEffect( () => {
        document.documentElement.scrollTo( 0, 0 );
    }, [ location.pathname ] );
    return children
}

export default ScrolTopWrapper