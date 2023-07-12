import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/authAction';
import { notifyError, notifySuccess } from '../useNotification';

function ForgetPasswordHook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [ email, setEmail ] = useState( "" )
    const [ loading, setLoading ] = useState( false )

    const onChangeEmail = ( e ) => {
        setEmail( e.target.value )
    }

    const onSubmit = async () => {
        setLoading( true )
        await dispatch( forgetPassword( { email, } ) )
        setLoading( false )
    }
    const res = useSelector( state => state.authReducer.forgetPassword )


    useEffect( () => {
        if ( loading === false && res && res.data && email !== "" ) {
            if ( res.data.message && res.status === 200 && res.data.message === "Reset code sent to your email" ) {
                notifySuccess( res.data.message )
                setTimeout( () => {
                    navigate( "/user/verify-code" )
                }, 1500 );
            } else {
                // localStorage.removeItem( "token" )
                // localStorage.removeItem( "user" )
                notifyError( "Invalid  Email,tyr agin" )
            }

        }
    }, [ loading ] )
    return [ onSubmit, onChangeEmail, email, loading ]
}

export default ForgetPasswordHook