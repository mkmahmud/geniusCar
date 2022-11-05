import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';
import './Services.css'

const Services = () => {

    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])

    return (
        <div className='my-20 text-center'>
            <p className='text-[#FF3811] '>Services</p>
            <h2 className='text-5xl font-bold py-2 '>Our services area</h2>
            <p className='w-2/3 m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className="cards my-10">
                {
                    servicesData.map(data => <ServicesCard data={data}></ServicesCard>)
                }
            </div>
            <div className="moreServices">

                <button className="btn btn-secondary">More services</button>
            </div>
        </div>
    );
};

export default Services;