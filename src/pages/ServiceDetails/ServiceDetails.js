import { Rating } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import AddReviews from './Reviews/AddReviews';
import ShowReviews from './Reviews/ShowReviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(true);
    const { _id, title, image, price, rating, description } = useLoaderData();

    return (
        <div className='w-3/4 mx-auto my-12'>
            <h2 className='text-4xl font-semibold my-6'>Service</h2>
            <div className="grid md:grid-cols-2 bg-base-100 shadow-xl">
                <figure><img className='w-full h-96 rounded-md' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: {price}Tk</p>
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
            <div>
                <ShowReviews id={_id} refresh={refresh}></ShowReviews>
                {
                    user?.email ? <AddReviews
                        id={_id}
                        setRefresh={setRefresh}
                        refresh={refresh}
                    ></AddReviews>
                    :
                    <p className='link underline text-xl'><Link to='/login'>Please Login first for review.</Link></p>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;