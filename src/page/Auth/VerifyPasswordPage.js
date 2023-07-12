import React from 'react'
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/Login-hook';
import Spinner from "../../Component/utility/Spinner"
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';
import VerifyPasswordHook from '../../hook/auth/verify-password-hook';

function VerifyPasswordPage() {
    const [ onSubmit, onChangeCode, code, loading ] = VerifyPasswordHook()
    return (
        <div className='md:container flex justify-center pt-10'>

            <Card color="transparent" shadow={ false } className='bg-white py-20 px-10 w-full md:w-[60%]'>
                <Typography variant="h4" color="blue-gray" >
                    Verify code
                </Typography>
                <Typography color="gray" className="mt-1 font-normal ">
                    Enter your code that received from your email.
                </Typography>
                <form className="mt-8 mb-2 max-w-screen-lg">
                    <div className="mb-4 flex flex-col gap-6">
                        {/* <Input size="lg" label="Name" /> */ }
                        <Input size="lg" label="code form 6 number..." value={ code } onChange={ onChangeCode } />
                        {/* <Input type="password" size="lg" label="Password" value={ password } onChange={ onChangePassword } /> */ }
                    </div>

                    <Button className="mt-6" fullWidth onClick={ onSubmit }>
                        verify code
                    </Button>
                </form>
                { loading ? ( loading === true ? <div className='flex justify-center m-10'><Spinner /></div> : null ) : null }
            </Card>
            <ToastContainer />
        </div>
    );
}

export default VerifyPasswordPage