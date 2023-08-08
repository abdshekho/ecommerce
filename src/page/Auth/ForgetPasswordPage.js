import React from 'react'
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/Login-hook';
import Spinner from "../../Component/utility/Spinner"
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';
import { LinearProgress } from '@mui/material';

function ForgetPasswordPage() {
    const [ onSubmit, onChangeEmail, email, loading ] = ForgetPasswordHook()
    return (
        <div className='md:container flex justify-center pt-10 relative'>
            { loading ?
                <div className='w-[100%] absolute z-20 top-[-2px]  '>
                    <LinearProgress />
                </div> : <div></div> }
            <Card color="transparent" shadow={ false } className={ `bg-white ${loading ? "opacity-60 " : "opacity-100 "}py-20 px-10 w-full md:w-[60%]` }>
                <Typography variant="h4" color="blue-gray" >
                    Forget password
                </Typography>
                <Typography color="gray" className="mt-1 font-normal ">
                    Enter your email to send code.
                </Typography>
                <form className="mt-8 mb-2 max-w-screen-lg">
                    <div className="mb-4 flex flex-col gap-6">
                        {/* <Input size="lg" label="Name" /> */ }
                        <Input size="lg" label="Email..." value={ email } onChange={ onChangeEmail } />
                        {/* <Input type="password" size="lg" label="Password" value={ password } onChange={ onChangePassword } /> */ }
                    </div>

                    <Button disabled={ loading } className="mt-6" fullWidth onClick={ onSubmit }>
                        Send me a code
                    </Button>
                </form>
                {
                    loading ? ( loading ? <div className='w-[97%]  absolute z-30 bottom-0 left-2 '>
                        <LinearProgress />
                    </div> : null ) : null
                }
            </Card>
            <ToastContainer />
        </div>
    );
}

export default ForgetPasswordPage