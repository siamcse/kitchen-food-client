import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/UseTitle';
import ServiceCard from '../../ServiceCard/ServiceCard';
import Banner from '../Banner/Banner';
import Speciality from '../Speciality/Speciality';

const Home = () => {
    const [services, setServices] = useState([]);
    const [speciality, setSpeciality] = useState([]);
    useTitle('Home');
    const size = 3;

    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${size}`)
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/speciality')
            .then(res => res.json())
            .then(data => setSpeciality(data))
    }, [])


    return (
        <div className='lg:max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <h2 className='text-4xl font-semibold text-center mt-12 mb-4'>My Services</h2>
            <p className='text-center mb-12'>I try to my best for my service quality do better.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
            <div>
                <h2 className='text-4xl font-semibold text-center my-12'>Why try Kitchen Food Service</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {
                        speciality.map(special=><Speciality
                        key={special._id}
                        special={special}
                        ></Speciality>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;