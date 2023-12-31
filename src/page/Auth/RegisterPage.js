import React from 'react';
import { Card, Input, Checkbox, Button, Typography, Spinner } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import RegisterHook from '../../hook/auth/register-hook';
import { ToastContainer } from 'react-toastify';
import { LinearProgress } from '@mui/material';

function RegisterPage() {
    const [ name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail,
        onChangePhone, onChangePassword, onChangeConfirmPassword, OnSubmit, press ] = RegisterHook()
    return (
        <div className='md:container flex justify-center pt-10 '>
            { loading ?
                <div className='w-[100%] absolute z-20 top-[-2px] '>
                    <LinearProgress />
                </div> : <div></div> }
            <Card color="transparent" shadow={ false } className={ `bg-white ${loading ? "opacity-60 " : "opacity-100 "}py-20 px-10 w-full md:w-[60%]` }>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <div className="mt-8 mb-2  max-w-screen-lg ">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="UserName" value={ name } onChange={ onChangeName } />
                        <Input size="lg" label="Email" value={ email } onChange={ onChangeEmail } />
                        <Input size="lg" label="phone" type='number' value={ phone } onChange={ onChangePhone } className='inputPhone'/>
                        <Input type="password" size="lg" label="Password" value={ password } onChange={ onChangePassword } />
                        <Input type="password" size="lg" label="Confirm password" value={ confirmPassword } onChange={ onChangeConfirmPassword } />
                    </div>
                    <Checkbox
                        label={
                            (
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <Link to="/"

                                        className="font-medium transition-colors hover:text-blue-500"
                                    >
                                        &nbsp;Terms and Conditions
                                    </Link>
                                </Typography>
                            )
                        }
                        containerProps={ { className: "-ml-2.5" } }
                    />
                    <Button disabled={ loading } className="mt-6" fullWidth onClick={ OnSubmit } type='submit'>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{ " " }
                        <Link to="/login"
                            href="#"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Sign In
                        </Link>
                    </Typography>

                </div>
            {
                loading ? ( loading ? <div className='w-[97%]  absolute z-30 bottom-0 left-2 '>
                    <LinearProgress />
                </div> : null ) : null
            }
            </Card>
            <ToastContainer />
        </div>
    )
}

export default RegisterPage