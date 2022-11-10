import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/UseTitle';
import ServiceCard from '../../ServiceCard/ServiceCard';
import Banner from '../Banner/Banner';
import Speciality from '../Speciality/Speciality';
import Stats from '../Stats/Stats';

const Home = () => {
    const [services, setServices] = useState([]);
    const [speciality, setSpeciality] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle('Home');
    const size = 3;

    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${size}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/speciality')
            .then(res => res.json())
            .then(data => {
                setSpeciality(data);
                setLoading(false);
            })
    }, [])


    return (
        <div className='lg:max-w-screen-xl mx-auto'>
            <Banner></Banner>
            {
            loading ? <div className='flex justify-center items-center h-96'>
                <p className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></p>
            </div>
            :
            <div>
                <h2 className='text-4xl font-medium mt-12 mb-2 pl-2'>My Services</h2>
                <p className=' mb-4 px-2'>I try my best for my service quality to do better.</p>
            </div>
}
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
                <h2 className='text-4xl font-medium mt-12 lg:mt-32 mb-4 pl-2'>Why try Kitchen Food Service</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {
                        speciality.map(special => <Speciality
                            key={special._id}
                            special={special}
                        ></Speciality>)
                    }
                </div>
            </div>
            <Stats></Stats>
        </div>
    );
};

export default Home;