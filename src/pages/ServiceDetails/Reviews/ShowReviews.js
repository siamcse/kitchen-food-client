import React, { useEffect, useState } from 'react';
import Review from './Review';

const ShowReviews = ({ refresh, id }) => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [refresh,id])
    return (
        <div>
            <h2>Total Reviews: {reviews.length}</h2>
            {
                reviews && reviews.map(review=><Review
                key={review._id}
                review={review}
                ></Review>)
            }
        </div>
    );
};

export default ShowReviews;