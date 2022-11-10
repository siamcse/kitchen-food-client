import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/UseTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle('Services')

    useEffect(() => {
        fetch(`https://kitchen-food-server-siamcse.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setLoading(false);
            })
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto mb-12'>

            {
                loading ? <div className='flex justify-center items-center h-96'>
                    <p className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></p>
                </div>
                    :
                    <h2 className='text-4xl text-center font-semibold my-12'>Total Services: {services.length}</h2>
            }
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