import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/services`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged){
                    Swal.fire(
                        'Good job!',
                        'Service added Successfully!',
                        'success'
                    )
                }
            })
    };
    return (
        <div className='lg:w-3/4 mx-auto max-w-screen-xl my-12'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input className="input input-bordered w-full lg:max-w-xl" placeholder='Title' {...register("title")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type='number' className="input input-bordered w-full lg:max-w-xl" placeholder='Price' {...register("price")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input className="input input-bordered w-full lg:max-w-xl" placeholder='Rating' {...register("rating")} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input className="input input-bordered w-full lg:max-w-xl" placeholder='PhotoURL' {...register("image", { required: true })} />
                    </div>
                </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                    <textarea className="input input-bordered w-full h-24" placeholder='Description' {...register("description", { required: true })} />
                    </div>


                <input className='btn btn-secondary w-full my-6' type="submit" />
                {errors.exampleRequired && <span>This field is required</span>}
            </form>
        </div>
    );
};

export default AddServices;