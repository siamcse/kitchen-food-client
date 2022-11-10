import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthProvider';

const AddReviews = ({ id, setRefresh, refresh }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, } = useForm();

    const onSubmit = data => {
        const email = user?.email;
        let newReview = { ...data };
        newReview['email'] = email;
        newReview['serviceId'] = id;
        setRefresh(!refresh)

        fetch(`https://kitchen-food-server-siamcse.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good!',
                        'Review added Successfully!',
                        'success'
                    )
                }
            })
    };
    return (
        <div className='lg:w-3/4 max-w-screen-xl my-12'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-full lg:max-w-xl" placeholder='Name' {...register("name")} required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input className="input input-bordered w-full lg:max-w-xl" placeholder='Rating (Out of 5)' {...register("rating")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input className="input input-bordered w-full lg:max-w-xl" placeholder='PhotoURL' {...register("image")} />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Your Comment</span>
                    </label>
                    <textarea className="input input-bordered w-full h-24" placeholder='Comment' {...register("comment", { required: true })} />
                </div>


                <input className='btn btn-secondary w-full my-6' type="submit" />
            </form>
        </div>
    );
};

export default AddReviews;