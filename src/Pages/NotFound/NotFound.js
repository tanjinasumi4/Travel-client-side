import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{width:'70%'}} src={notFound} alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;