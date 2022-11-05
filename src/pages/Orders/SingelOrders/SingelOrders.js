import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SingelOrders = ({ data }) => {

    const { serviceName, price, email, serviceid } = data;

    const [orderDetails, setOrderDetails] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceid}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data))
    }, [serviceid])

    return (
        <tr>
            <th>
                <button className="btn btn-error">X</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={orderDetails?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}

            </td>
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Prossesing</button>
            </th>
        </tr>
    );
};

export default SingelOrders;