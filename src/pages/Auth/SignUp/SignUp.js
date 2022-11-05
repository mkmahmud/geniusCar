import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SignUpImg from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);


    const handelSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
        .then(user => {
            console.log(user)
        })
        .catch(err => console.log(err))

        console.log(e)
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-2/3">
                    <img src={SignUpImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-3/4 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handelSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <h2 className='text-center'>Or sign with </h2>
                    <div className="authButtons flex justify-center">
                        <h2 className='mx-5 p-4 text-2xl cursor-pointer rounded-full'><i class="fa-brands fa-facebook"></i></h2>
                        <h2 className='mx-5 p-4 text-2xl cursor-pointer rounded-full'><i class="fa-brands fa-linkedin"></i></h2>
                        <h2 className='mx-5 p-4 text-2xl cursor-pointer rounded-full'><i class="fa-brands fa-google"></i></h2>
                    </div>
                    <div className="sugnup my-4">
                        <p className='text-center text-black'>Don't have an account? <Link to='/login' className='font-bold'>login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;