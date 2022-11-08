import React, { useEffect, useState } from 'react';
import ServiceCard from '../../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className='text-4xl text-center font-semibold my-12'>Total Services: {services.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;