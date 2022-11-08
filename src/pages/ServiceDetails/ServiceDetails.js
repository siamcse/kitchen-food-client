import { Rating } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, image, price, rating, description } = useLoaderData();

    return (
        <div className='w-3/4 mx-auto my-12'>
            <h2 className='text-4xl font-semibold my-6'>Service</h2>
            <div className="grid md:grid-cols-2 bg-base-100 shadow-xl">
                <figure><img className='w-full h-96 rounded-md' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between">
                        <div className="flex gap-1">
                            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                            <p>{rating}</p>
                        </div>
                        <button className="btn btn-secondary">Order</button>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl font-semibold my-6'>Service Reviews</h2>
        </div>
    );
};

export default ServiceDetails;