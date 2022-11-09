import React from 'react';

const Speciality = ({ special }) => {
    const {title, image,details} = special;
    return (
        <div className='w-full md:w-96 rounded-xl'>
            <img className='h-64 w-full border-4' src={image} alt="" />
            <div className="p-2 md:w-3/4">
                <h2 className='text-2xl font-medium mt-2'>{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Speciality;