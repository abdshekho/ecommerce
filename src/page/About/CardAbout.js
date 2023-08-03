import React from 'react'
import Av from "../../images/syrin-ecom3.jpg"
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

function CardAbout({image}) {
    return (
        <div className='my-10 md:my-20'>
            <Card className="flex-col lg:flex-row w-full ">
                <CardHeader shadow={ false } floated={ false } className="w-full  lg:w-2/5 shrink-0 m-0 rounded-b-none lg:rounded-bl-xl lg:rounded-r-none">
                    <img
                        src={ image }
                        alt="About us"
                        className="w-full h-full object-cover"
                    />
                </CardHeader>
                <CardBody className='flex flex-col justify-around'>
                    <Typography variant="h6" color="blue" className="uppercase mb-4">startups</Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2 text-md sm:text-xl">
                        Lyft launching cross-platform service this week
                    </Typography>
                    <Typography color="gray" className="font-normal mb-8  text-sm sm:text-lg">
                        Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
                    </Typography>
                    <Button variant="text" className="flex items-center gap-2">
                        Learn More
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardAbout