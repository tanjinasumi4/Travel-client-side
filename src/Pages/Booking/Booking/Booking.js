import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const {serviceId} = useParams();
     const [service,setService] = useState({})

    useEffect ( () =>{
        fetch(`https://ghoulish-mansion-84118.herokuapp.com/seervices/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
            <h2>Details of:{service.name}</h2>
            <h2>This is booking:{serviceId}</h2>
        </div>
    );
};

export default Booking;