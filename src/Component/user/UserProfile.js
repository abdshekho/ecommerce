import React from 'react'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Tooltip } from '@material-tailwind/react';
import { ToastContainer } from 'react-toastify';
import { FaPencilAlt } from "react-icons/fa";
import { updateUserProfileData } from '../../redux/actions/authAction';
import { notifyError } from '../../hook/useNotification';
import UserEditeProfileHook from '../../hook/user/user-edit-profile-hook';
import UserChangePassowordHook from '../../hook/auth/user-change-password-hook';
import Spinner from '../utility/Spinner';

function UserProfile() {
    const [ user, nameNew, EmailNew, phoneNew, setnameNew, setEmailNew, setphoneNew, loadingEdite, openEdit, setLoadingEdite, handleOpenEdite, handelEdit ] = UserEditeProfileHook()
    const [ currentPassword, password, passwordConfirm, setCurrentPasword, setPassowrd, setPasswordConfirm, handelSubmite, loadingChange ] = UserChangePassowordHook();
    return (
        <div className='container'>
            <h1 className='text-md md:text-xl  font-bold mb-1  text-blue-gray-700'>Profile page</h1>
            <div className=' bg-white my-6 p-4 pt-1 sm:py-8 rounded-lg shadow-lg'>
                <div className='flex flex-col-reverse sm:flex-row sm:justify-between p-2 pl-0'>
                    <span className='text-sm md:text-md  font-bold my-1'>Name: <span className='text-blue-gray-500'>{ user.name }</span></span>

                    <div onClick={ handleOpenEdite } className='flex justify-between text-sm px-1 pt-1 text-blue-gray-700 mb-3 sm:mb-0'>
                        <span className='flex cursor-pointer mr-1'><FaPencilAlt className='mr-1 ' />Edit</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm md:text-md  font-bold my-1'>Phone: <span className='text-blue-gray-500'>{ user.phone }</span></span>
                    <span className='text-sm md:text-md  font-bold my-1'>Email: <span className='text-blue-gray-500'>{ user.email }</span></span>
                </div>

            </div>
            <div >
                <h1 className='text-md md:text-lg  font-bold mb-1  text-blue-gray-700 mb-4'>Change old password</h1>
                <form className='bg-white rounded-lg shadow-lg p-10'>
                    <div className='"my-4 flex flex-col gap-6'>
                        <Input label='Enter old password' type='password' value={ currentPassword } onChange={ ( e ) => setCurrentPasword( e.target.value ) } />
                        <Input label='Enter new password' type='password' value={ password } onChange={ ( e ) => setPassowrd( e.target.value ) } />
                        <Input label='confirm new password' type='password' value={ passwordConfirm } onChange={ ( e ) => setPasswordConfirm( e.target.value ) } />
                    </div>
                    <Button className='my-6' onClick={ handelSubmite }>Save new password</Button>
                    { loadingChange ? <div className='m-10'>
                        <Spinner />
                    </div> : <div></div> }
                </form>
            </div>
            <Dialog open={ openEdit } handler={ handleOpenEdite } className='w-full max-w-[90%] md:max-w-[40%]'>
                <DialogHeader>Confirm profile Edite</DialogHeader>
                <DialogBody divider>
                    Do you want to edit this profile?<br />

                    {/* { loadingEdite ? <Spinner /> : <div></div> } */ }
                </DialogBody>
                <DialogBody divider>
                    <div className='my-4'>
                        <Input label='User name' value={ nameNew } onChange={ ( e ) => setnameNew( e.target.value ) } />
                    </div>
                    <div className='my-4'>
                        <Input label='phon' value={ phoneNew } onChange={ ( e ) => setphoneNew( e.target.value ) } />
                    </div>

                    <div className='my-4'>
                        <Input label='Email' value={ EmailNew } onChange={ ( e ) => setEmailNew( e.target.value ) } />
                    </div>

                </DialogBody>
                <DialogFooter className='flex justify-center md:justify-end'>
                    <Button variant="text" color="gray" onClick={ handleOpenEdite } className="mr-1">
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={ handelEdit }>
                        <span>Edite</span>
                    </Button>
                </DialogFooter>
            </Dialog>
            <ToastContainer />
        </div>
    )
}

export default UserProfile