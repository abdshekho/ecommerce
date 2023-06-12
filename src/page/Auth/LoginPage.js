import React from 'react'
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className='flex justify-center p-20'>

            <Card color="transparent" shadow={ false }>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to Sign In.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        {/* <Input size="lg" label="Name" /> */ }
                        <Input size="lg" label="Email" />
                        <Input type="password" size="lg" label="Password" />
                    </div>

                    <Button className="mt-6" fullWidth>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        I don't have an account?{ " " }
                        <Link to="/register"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Sign up
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}

export default LoginPage