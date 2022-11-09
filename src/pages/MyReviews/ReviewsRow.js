import React, { useEffect, useState } from 'react';
import { FaEdit, FaUserAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ReviewsRow = ({ review, handleDelete }) => {
    const { _id, name, email, image, comment, serviceId, rating } = review;
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return (
        <tr>
            <th>
                <label>
                    <Link to={`/review/${_id}`}><FaEdit className='text-2xl transform hover:scale-90'></FaEdit></Link>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                image ?
                                    <img className='w-24 rounded-full ' src={image} alt="" />
                                    :
                                    <FaUserAlt className='text-5xl p-1 border-2 rounded-full '></FaUserAlt>

                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                <Link className='hover:bg-secondary hover:text-white rounded-lg p-1' to={`/services/${service._id}`}>{service.title}</Link>
            </td>
            <td>{rating}</td>
            <td>
                <p>{comment}</p>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)}><RiDeleteBin6Line className='text-2xl text-red-500 transform hover:scale-90'></RiDeleteBin6Line></button>
            </th>
        </tr>
    );
};

export default ReviewsRow;