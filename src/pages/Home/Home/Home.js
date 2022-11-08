import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../ServiceCard/ServiceCard';
import Banner from '../Banner/Banner';

const Home = () => {
    const [services, setServices] = useState([]);
    const size = 3;

    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${size}`)
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])
    return (
        <div className='lg:max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <h2 className='text-4xl text-center my-12'>Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-6'>
                <Link to='/services' className='btn btn-secondary'>See More</Link>
            </div>
        </div>
    );
};

export default Home;