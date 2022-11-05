import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import SingelOrders from './SingelOrders/SingelOrders';

const Orders = () => {


    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState([]);

    if(!user?.email){
        <Navigate to='/home'></Navigate>
    }

    useEffect(() => {
        fetch(`http://localhost:5000/orders/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    console.log(orders)

    return (
        <div className='my-20'>
            <h2 className='text-center text-5xl'>Your total orders - {orders.length}</h2>
            <div className="orders">
                <div className="overflow-x-auto w-full my-5">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Product Name</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                          
                          {
                            orders.map(order => <SingelOrders data={order}></SingelOrders>)
                          }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;