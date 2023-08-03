import React from 'react'
import CardAbout from './CardAbout';
import Av from "../../images/syrin-ecom3.jpg"
import sh from "../../images/syrin-ecom4.jpg"


function About() {
    return (
        <div>

            <h1 className='text-xl md:text-2xl bg-[#474751] text-white p-2 text-center mb-20' style={ { boxShadow: "0px 6px 0px 0px #2196f3" } }>About us</h1>

            <div className='container my-10'>
                <CardAbout image={ Av } />
                <CardAbout image={ sh } />

            </div>
        </div>
    );
}

export default About