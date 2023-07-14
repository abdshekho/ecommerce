import Pagination from "../utility/Pagination"
import { Textarea, Button } from "@material-tailwind/react";
import ReactStars from "react-rating-stars-component";
import Comment from "./Comment";
import React from 'react'
import { FaStar } from "react-icons/fa";
import AddRateHook from "../../hook/review/add-rate-hook"
import RatePost from "./RatePost";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ViewAllReview from "../../hook/review/view-all-review";

function RateContainer( { rateQty, rateAvg } ) {
    const { id } = useParams()
    const [ onChangeRateText, onChangeRateValue, rateText, rateValue, user, onsubmite ] = AddRateHook( id );
    const [ allReview, onPress ] = ViewAllReview( id );

    const propsOfStartRating = {
        count: 5,
        onChange: value => onChangeRateValue( value ),
        size: 24,
        isHalf: true,
        emptyIcon: < i className="far fa-star" />,
        halfIcon: < i className="fa fa-star-half-alt" />,
        fullIcon: < i className="fa fa-star" />,
        // activeColor: "#ffd700",
        activeColor: "#ffc107",
        value: rateValue
    }
    
    return (
        <div className='mt-10 pb-10'>
            <div className='flex items-center'>
                <h1 className='text-md md:text-xl  font-bold mb-2 mr-2'> Rating: </h1>
                <span className='flex text-yellow-700 pr-1 text-sm md:text-lg '> <FaStar className='pt-1' /> { rateAvg }</span> <span className='text-xs text-blue-gray-500 pl-1'>({ rateQty } reviews)</span>
            </div>
            <div className="flex items-center">
                <span className="font-bold text-blue-900 ">{ user ? user.name : "" }</span>
                <div className="ml-2"><ReactStars { ...propsOfStartRating } /></div>
            </div>
            <RatePost onsubmite={ onsubmite } rateText={ rateText } onChangeRateText={ onChangeRateText } />
            <div className="border-b-[1px] border-gray-400">
                { allReview && allReview.data && allReview.data.length !== 0 ? allReview.data.map( ( review, index ) => {
                    return <Comment key={ index } review={ review } />
                } ) : <div className=" p-4 text-center text-blue-gray-700 font-sans">No Rating yet</div> }
            </div>
            { allReview && allReview.paginationResult && allReview.paginationResult.numberOfPages && allReview.paginationResult.numberOfPages > 1 ?

                <div>
                    <Pagination pageCount={ allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0 } onPress={ onPress } />
                </div>
                : <div></div> }
            <ToastContainer />
        </div>
    )
}

export default RateContainer