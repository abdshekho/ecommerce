import React from 'react'
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/Login-hook';
import Spinner from "../../Component/utility/Spinner"
import { ToastContainer } from 'react-toastify';
import ResetPasswordHook from '../../hook/auth/reset-password-hook';

function ResetPasswordPage() {
    const [ onSubmit, onChangeEmail, onChangePassword, onChangeConfirmPassword, email, password, confirmPassowrd, loading ] = ResetPasswordHook()
    return (
        <div className='md:container flex justify-center pt-10'>

            <Card color="transparent" shadow={ false } className='bg-white py-20 px-10 w-full md:w-[60%]'>
                <Typography variant="h4" color="blue-gray" >
                    Reset Password
                </Typography>
                <Typography color="gray" className="mt-1 font-normal ">
                    Enter your details to reset password.
                </Typography>
                <form className="mt-8 mb-2 max-w-screen-lg">
                    <div className="mb-4 flex flex-col gap-6">
                        {/* <Input size="lg" label="Name" /> */ }
                        <Input size="lg" label="Email" value={ email } onChange={ onChangeEmail } />
                        <Input type="password" size="lg" label="new Password" value={ password } onChange={ onChangePassword } />
                        <Input type="password" size="lg" label="confirm new password" value={ confirmPassowrd } onChange={ onChangeConfirmPassword } />
                    </div>

                    <Button className="mt-6" fullWidth onClick={ onSubmit }>
                        sent
                    </Button>



                </form>
                { loading ? ( loading === true ? <div className='flex justify-center m-10'><Spinner /></div> : null ) : null }
            </Card>
            <ToastContainer />
        </div>
    );
}

export default ResetPasswordPage