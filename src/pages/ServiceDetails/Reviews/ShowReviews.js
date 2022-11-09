import React, { useEffect, useState } from 'react';
import Review from './Review';

const ShowReviews = ({ refresh, id }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
    }, [refresh, id])

    return (
        <div>
            {
                loading ? <div className='flex justify-center items-center h-96'>
                    <p className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></p>
                </div>
                    :
                    <h2>Total Reviews: {reviews.length}</h2>
            }
            {
                reviews && reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default ShowReviews;