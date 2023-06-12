import React from 'react'
import { FaTwitter, FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-gray-200 p-4 mt-20'>

            <div className='container flex justify-between flex-col  md:flex-row'>
                <div className='flex items-center text-gray-600 justify-center md:justify-start'>
                    <FaTwitter className='mr-1 hover:text-gray-800' />
                    <FaInstagram className='mr-1 hover:text-gray-800' />
                    <FaFacebookF className='mr-1 hover:text-gray-800' />
                    <span className='flex items-center  ml-2 hover:text-gray-800'>+9639 123 456 78 <FaPhoneAlt className='ml-2' /> </span>
                </div>
                <div className='flex justify-center mt-4 md:mt-0 md:justify-start flex-wrap'>
                    <a href='https:' className='mx-2 text-gray-600 hover:text-gray-800'>contanc</a>
                    <a href='https:' className='mx-2 text-gray-600 hover:text-gray-800'>someThing here</a>
                    <a href='https:' className='mx-2 text-gray-600 hover:text-gray-800'>someThing here</a>
                </div>
            </div>
        </div>
    )
}

export default Footer