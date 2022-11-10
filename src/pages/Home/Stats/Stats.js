import React from 'react';
import { GrDeliver } from "react-icons/gr";

const Stats = () => {
    return (
        <div className='bg-base-200 p-6 my-12 rounded-xl'>
            <h2 className='text-4xl text-center font-medium mt-6 mb-2'>Why Choose Us</h2>
            <p className='text-center mb-6'>The process of our service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='md:w-3/5 mx-auto text-center'>
                    <h2 className='text-2xl font-medium mb-2'>On Time Delivery</h2>
                    <p>I provide on-time delivery. You get your food service within 40 minutes.</p>
                </div>
                <div className='md:w-3/5 mx-auto text-center'>
                    <h2 className='text-2xl font-medium mb-2'>Free Delivery Cost</h2>
                    <p>You can get my service without a free of cost delivery charge.</p>
                </div>
                <div className='md:w-3/5 mx-auto text-center'>
                    <h2 className='text-2xl font-medium mb-2'>Best Quality Food</h2>
                    <p>My food item is hygienic and provides fresh food.</p>
                </div>
                <div className='md:w-3/5 mx-auto text-center'>
                    <h2 className='text-2xl font-medium mb-2'>Opening Time</h2>
                    <p>You can get this food service daily from 8 am to 10 pm.</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;