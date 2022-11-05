import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <p className='text-[#FF3811] text-[20px]'>About us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
                <div className="card relative flex-shrink-0 w-1/2 max-w-sm  ">
                    <img className=' w-4/5 h-full' src={person} alt="" />
                    <img className='absolute w-1/2 border border-4 border-black right-5 top-1/2'  src={parts} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;