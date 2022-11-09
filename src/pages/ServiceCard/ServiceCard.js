import { Rating } from '@mui/material';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, image, title, price, description, rating } = service;
    return (
        <div className="card w-full bg-base-100 border-4 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img className='w-full h-80' src={image} style={{ objectFit: 'cover' }} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">tasty</div>
                </h2>
                <p>Price: {price} Tk</p>
                <p>
                    {
                        description.length > 100 ? description.slice(0, 100) + "..." : description
                    }
                </p>
                <div className="card-actions justify-between items-center">
                    <div className="flex gap-1">
                        <Rating name="half-rating-read" defaultValue={Number(rating)} precision={0.5} readOnly />
                        <p>{Number(rating)}</p>
                    </div>
                    <div className="">
                        <Link to={`/services/${_id}`} className='btn btn-secondary btn-sm'>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;