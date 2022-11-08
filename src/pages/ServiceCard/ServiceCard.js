import React from 'react';

const ServiceCard = ({ service }) => {
    const { image, title, price, description, rating } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-80' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">tasty</div>
                </h2>
                <p>Price: {price} Tk</p>
                <p>
                    {
                        description.length>100 ? description.slice(0,100)+"...": description
                    }
                </p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;