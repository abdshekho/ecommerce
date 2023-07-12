import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { forgetPassword, verifyPassword } from '../../redux/actions/authAction';
import { notifyError, notifySuccess } from '../useNotification';

function VerifyPasswordHook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [ code, setCode ] = useState( "" )
    const [ loading, setLoading ] = useState( false )

    const onChangeCode = ( e ) => {
        setCode( e.target.value )
    }

    const onSubmit = async () => {
        if ( code === "" ) {
            notifyError( "Enter code" )
        }
        setLoading( true )
        await dispatch( verifyPassword( {
            resetCode: code
        } ) )
        setLoading( false )
    }
    const res = useSelector( state => state.authReducer.verifyPassword )

    useEffect( () => {
        if ( loading === false && res && res.data ) {
            if ( res.status === 200 && res.data.status === "Success" ) {
                notifySuccess( "valid code" )
                setTimeout( () => {
                    navigate( "/user/reset-password" )
                }, 1500 );
            } else {
                // localStorage.removeItem( "token" )
                // localStorage.removeItem( "user" )
                notifyError( "Invalid  code or finished valid time ,tyr agin" )
            }

        }
    }, [ loading ] )
    return [ onSubmit, onChangeCode, code, loading ]
}

export default VerifyPasswordHook