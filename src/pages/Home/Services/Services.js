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
        <div>
            <h2 className='text-4xl text-center font-semibold'>Total Services: {services.length}</h2>
            <div>
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