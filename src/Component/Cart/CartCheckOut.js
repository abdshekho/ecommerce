import React from 'react'
import { Input, Button, Chip } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
function CartCheckOut() {
    const [ email, setEmail ] = React.useState( "" );
    const onChange = ( { target } ) => setEmail( target.value );
    return (
        <div className='flex flex-col'>
            <div className="relative flex w-full w-full">
                <Input
                    type="text"
                    label="Cobon Code"
                    value={ email }
                    onChange={ onChange }
                    className="pr-20"
                    containerProps={ {
                        className: "min-w-0",
                    } }
                />
                <Button
                    size="sm"
                    color={ email ? "blue" : "blue-gray" }
                    disabled={ email.length < 4 }
                    className="!absolute right-1 top-1 rounded"
                >
                    Set
                </Button>
            </div>
            <Chip value="Price after Discount" className='text-center py-3 my-2 bg-gray-700' />
            <Link to={ "/order/paymethoud" }>

                <Button className='w-full'>Complate</Button>
            </Link>
        </div>
    )
}

export default CartCheckOut