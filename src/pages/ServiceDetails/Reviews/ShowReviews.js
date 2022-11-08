import React, { useEffect, useState } from 'react';

const ShowReviews = ({ refresh, id }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [refresh])
    return (
        <div>
            <h2>Reviews are goes to here.{reviews.length}</h2>
        </div>
    );
};

export default ShowReviews;