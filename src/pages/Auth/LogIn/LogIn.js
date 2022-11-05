import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg'

const LogIn = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-2/3">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-3/4 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <h2 className='text-center'>Or sign with </h2>
                    <div className="authButtons flex justify-center">
                        <h2 className='mx-5 p-4 text-2xl cursor-pointer rounded-full'><i class="fa-brands fa-facebook"></i></h2>
                        <h2 className='mx-5 p-4 text-2xl cursor-pointer rounded-full'><i class="fa-brands fa-linkedin"></i></h2>
                        <h2 className='mx-5 p-4 text-2xl cursor-pointer rounded-full'><i class="fa-brands fa-google"></i></h2>
                    </div>
                    <div className="sugnup my-4">
                        <p className='text-center text-black'>Already have an account? <Link to='/signup' className='font-bold'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;