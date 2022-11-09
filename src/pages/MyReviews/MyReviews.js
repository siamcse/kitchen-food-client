import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Reviews = () => {
    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyReviews(data);
        })
    },[user?.email])

    return (
        <div>
            <h2>My Reviews: {myReviews.length}</h2>
        </div>
    );
};

export default Reviews;