
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { createNewUser } from '../../redux/actions/authAction';

import { notifyError, notifySuccess } from '../useNotification';
import {  loginUser } from '../../redux/actions/authAction';
function LoginHook() {
    const dispatch = useDispatch();

    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ loading, setLoading ] = useState( false );

    const onChangeEmail = ( e ) => {
        setEmail( e.target.value )
    }

    const onChangePassword = ( e ) => {
        setPassword( e.target.value )
    }
    const validationValues = () => {

        if ( !( /\S+@\S+\.\S+/.test( email ) ) ) {
            notifyError( "You have entered an invalid email address!" )
            return;
        }

        if ( !password ) {
            notifyError( "Password is invalid" )
            return;
        }

    }
    const onSubmit = async () => {
        validationValues();
        setLoading( true )
        await dispatch( loginUser( {
            email,
            password
        } ) )
        setLoading( false )

    }
    const res = useSelector( state => state.authReducer.loginUser )

    useEffect( () => {
        if ( loading === false && res && res.data ) {
            if ( res.data.token && res.status === 200 ) {
    
                localStorage.setItem( "token", res.data.token )
                localStorage.setItem( "user", JSON.stringify(res.data.data) )
                notifySuccess( "Register Complete" )
                setTimeout( () => {
                    window.location.href = "/"
                }, 500 );
            } else {
                localStorage.removeItem( "token" )
                localStorage.removeItem( "user" )
                notifyError( "Invalid  Value" )
            }

        }
    }, [ loading ] )

    return [ email, password, loading, onChangeEmail, onChangePassword, onSubmit ]
}

export default LoginHook