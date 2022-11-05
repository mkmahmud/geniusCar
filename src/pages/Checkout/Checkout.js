import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Checkout = () => {

    const {user} = useContext(AuthContext)

    const { _id, title, price  } = useLoaderData()
    const mydata = useLoaderData()
    console.log(mydata)

    const handelOrderSubmit = (e) => {
        e.preventDefault()
        const name = `${e.target.firstName.value} ${e.target.lastName.value}`
        const phone = e.target.phone.value;
        const email = user?.email || 'unregistered'
        const message = e.target.message.value;


        const order = {
            serviceid: _id,
            serviceName: title,
            price,
            customer:name,
            phone,
            email, 
            message
        }

        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }

    return (
        <div>
            <div className="w-3/4 bg-[#095830] mx-auto p-10">
                <form onSubmit={handelOrderSubmit}>

                    <div className="singelRow flex">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Your First Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="First Name" name='firstName' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Your Last Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Last Name" name='lastName' className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="singelRow flex">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Your Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" readOnly defaultValue={user?.email} className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Your Phone</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="+88902983172" name='phone' className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <textarea className="textarea textarea-success w-full my-10" name='message' placeholder="Message"></textarea>

                    <button type='submit' className="btn btn-success">Order</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;