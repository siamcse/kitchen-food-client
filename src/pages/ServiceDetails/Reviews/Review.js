import { Rating } from '@mui/material';
import React from 'react';
import { FaUserAlt } from "react-icons/fa";

const Review = ({ review }) => {
    const { name, image, comment, rating } = review;
    return (
        <div className='flex items-center gap-5 my-12'>
            {
                image ?
                    <img className='w-24 rounded-full ' src={image} alt="" />
                    :
                    <FaUserAlt className='text-6xl w-24 h-24 p-1 border-2 rounded-full '></FaUserAlt>
                    
            }
            <div>
                <h5>{name}</h5>
                <div className="flex gap-1">
                    <Rating name="half-rating-read" defaultValue={Number(rating)} precision={0.5} readOnly />
                </div>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Review;