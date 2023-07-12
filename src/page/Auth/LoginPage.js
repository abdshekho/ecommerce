import React from 'react'
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/Login-hook';
import Spinner from "../../Component/utility/Spinner"
import { ToastContainer } from 'react-toastify';

function LoginPage() {
    const [ email, password, loading, onChangeEmail, onChangePassword, onSubmit ] = LoginHook()
    return (
        <div className='md:container flex justify-center pt-10'>

            <Card color="transparent" shadow={ false } className='bg-white py-20 px-10 w-full md:w-[60%]'>
                <Typography variant="h4" color="blue-gray" >
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal ">
                    Enter your details to Sign In.
                </Typography>
                <form className="mt-8 mb-2 max-w-screen-lg">
                    <div className="mb-4 flex flex-col gap-6">
                        {/* <Input size="lg" label="Name" /> */ }
                        <Input size="lg" label="Email" value={ email } onChange={ onChangeEmail } />
                        <Input type="password" size="lg" label="Password" value={ password } onChange={ onChangePassword } />
                    </div>

                    <Button className="mt-6" fullWidth onClick={ onSubmit }>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        <Link to="/user/forget-password"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Forget Password{ " " }
                        </Link>
                    </Typography>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        I don't have an account?{ " " }
                        <Link to="/register"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Sign up
                        </Link>
                    </Typography>
                </form>
                { loading ? ( loading === true ? <div className='flex justify-center m-10'><Spinner /></div> : null ) : null }
            </Card>
            <ToastContainer />
        </div>
    );
}

export default LoginPage