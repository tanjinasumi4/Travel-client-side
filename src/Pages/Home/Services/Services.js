import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('https://ghoulish-mansion-84118.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id="services">
            <h2 className="text-decoration-underline text-primary mt-5">Visit our places</h2>
            <div className="service-container">
            {
                services.map(service => <Service
                
                    key={service.id}
                    service={service}
                
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;