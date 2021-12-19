import React from 'react';
import { Link } from 'react-router-dom';
import  './Service.css'

const Service = ({service}) => {
    const {_id,title,descroption,img} = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p className="px-5">{descroption}</p>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-secondary ">Visit this Place {title.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;