import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/UseTitle';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [loading, setLoading] = useState(true);
    useTitle('My Reviews')

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setMyReviews(data);
                setLoading(false);
            })
    }, [user?.email, refresh, logOut])

    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('kitchen-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setRefresh(!refresh);
                    toast.success('Successfully deleted!');
                    setLoading(false);
                }
            })
    }


    return (
        <div className='max-w-screen-xl mx-auto mb-12'>

            {
                loading ? <div className='flex justify-center items-center h-96'>
                    <p className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></p>
                </div>
                    :
                    <h2 className='text-4xl font-bold text-center my-12' > My Reviews: {myReviews.length}</h2>
            }

            {
                myReviews.length > 0 ?
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Edit</th>
                                    <th>Name</th>
                                    <th>Service</th>
                                    <th>Rating</th>
                                    <th>Comment</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myReviews.map(review => <ReviewsRow
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                    ></ReviewsRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='flex justify-center items-center h-96'>
                        <h2 className="text-4xl">No reviews were added</h2>
                    </div>
            }
        </div >
    );
};

export default Reviews;