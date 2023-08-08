import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {  resetPassword} from '../../redux/actions/authAction';
import { notifyError, notifySuccess } from '../useNotification';

function ResetPasswordHook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [ email, setEmail ] = useState( "" )
    const [ password, setPassword ] = useState( "" )
    const [ confirmPassowrd, setConfirmPassword ] = useState( "" )
    const [ loading, setLoading ] = useState( false )

    const onChangeEmail = ( e ) => {
        setEmail( e.target.value )
    }
    const onChangePassword = ( e ) => {
        setPassword( e.target.value )
    }
    const onChangeConfirmPassword = ( e ) => {
        setConfirmPassword( e.target.value )
    }

    const onSubmit = async () => {
        if ( email === "" || password === "" || confirmPassowrd === "" ) {
            notifyError( "invalid details " )
            return
        }
        if ( password !== confirmPassowrd ) {
            notifyError( "password not equal confirm password " )
            return

        }
        setLoading( true )
        await dispatch( resetPassword( {
            email: email,
            newPassword: password
        } ) )
        setLoading( false )
    }
    const res = useSelector( state => state.authReducer.resetPassword )


    useEffect( () => {
        if ( loading === false && res && res.data ) {
            if ( res.status === 200 && res.statusText === "OK" ) {
                notifySuccess( "reset password complete" )
                setTimeout( () => {
                    navigate( "/login" )
                }, 1500 );
            } else {

                notifyError( "Error ...." )
            }

        }
    }, [ loading ] )
    return [ onSubmit, onChangeEmail, onChangePassword, onChangeConfirmPassword, email, password, confirmPassowrd, loading ]
}

export default ResetPasswordHook