import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const ReviewEdit = () => {
    const { register, handleSubmit, } = useForm();
    const { _id, name, rating, image, comment } = useLoaderData();

    const onSubmit = data => {
        fetch(`https://kitchen-food-server-siamcse.vercel.app/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Modify successful.');
                }
            })
    }
    return (
        <div className='lg:w-3/4 max-w-screen-xl mx-auto my-12'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-full lg:max-w-xl" placeholder='Name' defaultValue={name} {...register("name")} required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input className="input input-bordered w-full lg:max-w-xl" placeholder='Rating' defaultValue={rating} {...register("rating")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input className="input input-bordered w-full lg:max-w-xl" placeholder='PhotoURL' defaultValue={image} {...register("image")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Comment</span>
                        </label>
                        <textarea className="input input-bordered w-full lg:max-w-xl h-24" placeholder='Comment' defaultValue={comment} {...register("comment", { required: true })} />
                    </div>
                </div>


                <input className='btn btn-secondary w-full lg:max-w-xl my-6' type="submit" />
            </form>
        </div>
    );
};

export default ReviewEdit;