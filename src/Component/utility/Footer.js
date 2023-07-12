import { Tooltip, Typography } from '@material-tailwind/react';
import React from 'react'
import { FaTwitter, FaInstagram, FaFacebookF, FaPhoneAlt, FaLinkedin, FaGithubSquare, FaFacebookSquare, FaPhoneSquareAlt, FaWhatsappSquare } from "react-icons/fa";
import logo from "../../images/logo.png"
function Footer() {
    const animateTooltip = {
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
    }
    return (
        <div className='bg-[#f2f1f6d1] p-4 mt-20 '>

            <div className='container flex justify-between items-center flex-col  md:flex-row gap-20'>

                <div className='flex items-center justify-center bg-blue-gray-700 rounded-lg shadow-2xl w-[90px] h-[90px]'>
                    <img src={ logo } className='' alt='' />
                </div>
                <div className='flex flex-colr items-center text-gray-600 justify-center md:justify-start gap-4'>
                    <Tooltip content={ "https://github.com/abdshekho" } className="bg-gray-800" animate={ animateTooltip }>
                        <a href='https://github.com/abdshekho' target="_blank">
                            <FaGithubSquare className='mr-1 cursor-pointer hover:text-gray-800 w-[30px] h-[30px]' />
                        </a>

                    </Tooltip>
                    <Tooltip content={ "https://www.linkedin.com/in/abd-shekho/" } className="bg-[#4267B2]" animate={ animateTooltip }>
                        <a href='https://www.linkedin.com/in/abd-shekho/' target="_blank">
                            <FaLinkedin className='mr-1 cursor-pointer hover:text-[#4267B2] w-[30px] h-[30px]' />
                        </a>

                    </Tooltip>

                    <Tooltip content={ "https://www.facebook.com/abd.shekho/" } className="bg-[#4267B2]" animate={ animateTooltip }>
                        <a href='https://www.facebook.com/abd.sheko/' target="_blank">
                            <FaFacebookSquare className='mr-1 cursor-pointer hover:text-[#4267B2] w-[30px] h-[30px]' />
                        </a>

                    </Tooltip>
                    <Tooltip content={ " +9639 536 796 41 " } className="bg-[#128C7E]" animate={ animateTooltip }>
                        <a className='hover:text-[#128C7E] cursor-pointer' href='https://api.whatsapp.com/send?phone=+963953679641&text=%22' target="_blank">
                            <span className='flex items-center  '><FaWhatsappSquare className='mr-2 w-[30px] h-[30px]' /> </span>
                        </a>

                    </Tooltip>
                    <Tooltip content={ " +9639 536 796 41 " } className="bg-gray-800" animate={ animateTooltip }>
                        <a className='cursor-pointer   hover:text-gray-800' href='tel:[+963953679641]' target="_blank">
                            <span className='flex items-center '><FaPhoneSquareAlt className='mr-2 w-[30px] h-[30px]' /> </span>
                        </a>

                    </Tooltip>
                </div>
                <div className='flex flex-col gap-3 justify-center text-center'>
                    <a href='https://www.linkedin.com/in/abd-shekho/' className='mx-2 text-gray-600 hover:text-[#2196f3]'>About Us</a>
                    <a href='https://www.linkedin.com/in/abd-shekho/' className='mx-2 text-gray-600 hover:text-[#2196f3]'>Contact Us</a>
                    <a href='https://www.linkedin.com/in/abd-shekho/' className='mx-2 text-gray-600 hover:text-[#2196f3]'>Projects</a>
                </div>
            </div>
        </div>
    )
}

export default Footer