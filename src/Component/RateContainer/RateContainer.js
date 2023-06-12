import Pagination from "../utility/Pagination"
import { Textarea, Button } from "@material-tailwind/react";
import ReactStars from "react-rating-stars-component";
import Comment from "./Comment";
import React from 'react'
import { FaStar } from "react-icons/fa";

function RateContainer() {
    const ratingChanged = ( newRating ) => {
        console.log( newRating );
    }
    const propsOfStartRating = {
        count: 5,
        onChange: ratingChanged,
        size: 24,
        isHalf: true,
        emptyIcon: < i className="far fa-star" />,
        halfIcon: < i className="fa fa-star-half-alt" />,
        fullIcon: < i className="fa fa-star" />,
        // activeColor: "#ffd700",
        activeColor: "#ffc107",
        value: 1
    }
    return (
        <div className='mt-10'>
            <div className='flex items-center'>
                <h1 className='text-md md:text-xl  font-bold mb-2 mr-2'> Rating: </h1>
                <span className='flex text-yellow-700 pr-1 text-sm md:text-lg '> <FaStar className='pt-1' /> 4.3</span> <span className='text-xs font-bold pl-1'>(160 Rates)</span>
            </div>
            <div className="flex items-center">
                <span className="font-bold text-blue-900 ">Name of user</span>
                <div className="ml-2"><ReactStars { ...propsOfStartRating } /></div>
            </div>
            <form className="my-4">
                <Textarea label="Message" />
                <Button  className="my-2 " >Add comment</Button>
            </form>
            <div className="border-b-[1px] border-gray-400">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    )
}

export default RateContainer