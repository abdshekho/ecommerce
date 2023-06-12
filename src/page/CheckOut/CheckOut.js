import React from 'react'
import { Button, Radio, Chip } from "@material-tailwind/react";

function CheckOut() {
    return (
        <div className='container text-md md:text-xl  font-bold mb-2'>

            <h1 className='text-blue-gray-500 mt-10 '>Choose way that will pay</h1>
            <div className=' flex flex-col  bg-gray-100 p-10 my-10 text-sm md:text-lg  font-sans text-blue-gray-800 rounded-lg sm:rounded-2xl'>

                <Radio id="html" name="type" label="Pay by Vista" />
                <Radio id="react" name="type" label="Pay when delivery" defaultChecked />

            </div>
            <div className='container'>
                <Button className='mr-2'>Complate</Button>
                <Chip value="Final Price" className='text-center py-3 my-2 bg-gray-700' />
            </div>
        </div>
    )
}

export default CheckOut