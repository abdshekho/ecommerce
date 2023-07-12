import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { createNewUser } from '../../redux/actions/authAction';
import { notifyError, notifySuccess } from '../../hook/useNotification';
import { createNewUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ name, setName ] = useState( '' )
    const [ email, setEmail ] = useState( '' )
    const [ phone, setPhone ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const [ confirmPassword, setConfirmPassword ] = useState( '' )
    const [ loading, setLoading ] = useState( true )

    const onChangeName = ( e ) => {
        setName( e.target.value )
        console.log( e.target.value )
    }
    const onChangeEmail = ( e ) => {
        setEmail( e.target.value )
    }
    const onChangePhone = ( e ) => {
        setPhone( e.target.value )
    }
    const onChangePassword = ( e ) => {
        setPassword( e.target.value )
    }
    const onChangeConfirmPassword = ( e ) => {
        setConfirmPassword( e.target.value )
    }

    const validationValues = () => {
        if ( name === "" ) {
            notifyError( "من فضلك ادخل اسم المستخدم" )
            return;
        }
        if ( !( /\S+@\S+\.\S+/.test( email ) ) ) {
            notifyError( "You have entered an invalid email address!" )
            return;
        }
        if ( phone.length <= 10 ) {
            notifyError( "You have entered an invalid Phone!" )
            return;
        }
        if ( password !== confirmPassword ) {
            notifyError( "password didn't match" )
            return;
        }

    }

    const res = useSelector( state => state.authReducer.createUser )

    //save data
    const OnSubmit = async () => {
        validationValues();
        setLoading( true )
        await dispatch( createNewUser( {
            name,
            email,
            password,
            passwordConfirm: confirmPassword,
            phone
        } ) )
        setLoading( false )
    }

    useEffect( () => {
        if ( loading === false ) {
            if ( res ) {
                if ( res.data.token ) {
                    localStorage.setItem( "token", res.data.token )
                    console.log( res )
                    notifySuccess( "Register Complete" )
                    setTimeout( () => {
                        navigate( '/login' )
                    }, 2000 );
                }

                if ( res.data.errors ) {
                    if ( res.data.errors[ 0 ].msg === "E-mail already in use" )
                        notifyError( "this email already Register" )
                }
                if ( res.data.errors ) {
                    if ( res.data.errors[ 0 ].msg === "accept only syrian phone numbers" )
                        notifyError( "should be The nubmer phone has 11 number" )
                }

                if ( res.data.errors ) {
                    if ( res.data.errors[ 0 ].msg === "must be at least 6 chars" )
                        notifyError( "must be at least 6 chars in Password" )
                }


            }
        }
    }, [ loading ] )

    return [ name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail,
        onChangePhone, onChangePassword, onChangeConfirmPassword, OnSubmit ]
}

export default RegisterHook