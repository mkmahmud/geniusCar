import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({data}) => {
    const {img, title, price, _id} = data;
    // console.log(data)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                    <h2>price: ${price}</h2>
                    <button className="btn btn-primary"><Link to={`/services/${_id}`}>CheckOut</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;