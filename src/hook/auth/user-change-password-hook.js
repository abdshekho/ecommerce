import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notifyError, notifySuccess } from '../useNotification';
import { updateUserPassword } from '../../redux/actions/authAction';

function UserChangePassowordHook() {
    const dispatch = useDispatch();
    let user = JSON.parse( localStorage.getItem( "user" ) )

    const [ loadingChange, setloadingChange ] = useState( false )
    const [ currentPassword, setCurrentPasword ] = useState( "" )
    const [ password, setPassowrd ] = useState( "" )
    const [ passwordConfirm, setPasswordConfirm ] = useState( "" )


    const resChangePassword = useSelector( state => state.authReducer.userChangePassword )
    const handelSubmite = async () => {
        if ( currentPassword === "" || password === "" || passwordConfirm === "" || password !== passwordConfirm ) {
            notifyError( "invalid value" )
            return
        }
        setloadingChange( true )
        await dispatch( updateUserPassword( {
            currentPassword: currentPassword,
            password: password,
            passwordConfirm: passwordConfirm
        } ) )
        setloadingChange( false )

    }
    useEffect( () => {
        if ( !loadingChange ) {
            if ( resChangePassword && resChangePassword.status === 200 && resChangePassword.statusText === "OK" && resChangePassword.data && resChangePassword.data.token ) {
                localStorage.setItem( "token", resChangePassword.data.token )
                notifySuccess( "save a new password" )
                setTimeout( () => {
                    window.location.reload()
                }, 1200 )

            }
            else if ( resChangePassword && resChangePassword.status === 400 ) {
                notifyError( 'check from current password' )
            }
        }
    }, [ loadingChange ] )
    return [ currentPassword, password, passwordConfirm, setCurrentPasword, setPassowrd, setPasswordConfirm, handelSubmite, loadingChange ]
}

export default UserChangePassowordHook