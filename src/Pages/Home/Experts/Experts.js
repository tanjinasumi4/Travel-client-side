import React from 'react';

import resort1 from '../../../images/resort pic/download (1).jpg'
import resort2 from '../../../images/resort pic/download (2).jpg'
import resort3 from '../../../images/resort pic/download (3).jpg'
import resort4 from '../../../images/resort pic/download (4).jpg'
import resort5 from '../../../images/resort pic/download (5).jpg'
import resort6 from '../../../images/resort pic/download (6).jpg'
import Expert from '../Expert/Expert';

const experts = [

    {
        img: resort1,
        name: 'Chuti Resort',
        place:'Dhaka'
    },
    {
        img: resort2,
        name: 'Rangauti Resort',
        place:'Maulvi Bazar'
    },
    {
        img: resort3,
        name: 'Sarah Resort',
        place:' Gazipur'
    },
    {
        img: resort4,
        name: 'Swiss Valley Resort',
        place:'Sylhet'
    },
    {
        img: resort5,
        name: 'Royal Tulip Sea Pearl Beach Resort',
        place:'Coxs Bazar'
    },
    {
        img: resort6,
        name: 'Divine Eco Resort',
        place:'Coxs Bazar'
    },

]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-decoration-underline text-primary mt-5">OUR RESORT'S</h2>
            <div className="row">
              {
                  experts.map(expert => <Expert
                  key={expert.name}
                  expert={expert}

                  >

                  </Expert>)
              }
            </div>
        </div>
    );
};

export default Experts;