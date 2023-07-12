import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notifyError } from '../useNotification';
import { updateUserProfileData } from '../../redux/actions/authAction';

function UserEditeProfileHook() {
  const dispatch = useDispatch();
  let user = JSON.parse( localStorage.getItem( "user" ) )

  const [ nameNew, setnameNew ] = useState( "" )
  const [ phoneNew, setphoneNew ] = useState( "" )
  const [ EmailNew, setEmailNew ] = useState( "" )
  const [ loadingEdite, setLoadingEdite ] = useState( false )

  const [ openEdit, setOpenEdite ] = useState( false );

  const handleOpenEdite = () => {

    setnameNew( user.name )
    setphoneNew( user.phone )
    setEmailNew( user.email )

    setOpenEdite( !openEdit )
  }
  const resEditeProfile = useSelector( state => state.authReducer.userProfile )
  const handelEdit = async () => {
    if ( nameNew === "" || phoneNew === "" || EmailNew === "" || phoneNew === "" ) {
      notifyError( "invalid value" )
      return
    }
    setLoadingEdite( true )
    if ( EmailNew === user.email ) {
      await dispatch( updateUserProfileData( {
        name: nameNew,
        phone: phoneNew
      } ) )
    } else if ( EmailNew !== user.email ) {
      await dispatch( updateUserProfileData( {
        name: nameNew,
        phone: phoneNew,
        email: EmailNew
      } ) )
    }
    setLoadingEdite( false )
    setOpenEdite( !openEdit )
  }
  useEffect( () => {
    if ( !loadingEdite ) {
      if ( resEditeProfile && resEditeProfile.status === 200 && resEditeProfile.statusText === "OK" && resEditeProfile.data && resEditeProfile.data.data && resEditeProfile.data.data.user ) {
        localStorage.setItem( "user", JSON.stringify( resEditeProfile.data.data.user ) )
        window.location.reload()

      }
    }
  }, [ loadingEdite ] )

  return [ user, nameNew, EmailNew, phoneNew, setnameNew, setEmailNew, setphoneNew, loadingEdite, openEdit,setLoadingEdite, handleOpenEdite, handelEdit ]
}

export default UserEditeProfileHook