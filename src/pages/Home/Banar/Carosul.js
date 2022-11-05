import React from 'react';

const Carosul = ({slide}) => {
    const {id, img, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="img">
        <img src={img} className="w-full" />
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-5  top-1/3">
            <h2 className='text-[60px] text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-5  top-2/3 w-1/2" >
            <h2 className='text-[20px] text-white '>   There are many variations of passages of  available, but the majority have suffered alteration in some form</h2>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-5  top-3/4" >
            <button className="btn btn-warning mx-4">Discover more</button>
            <button className="btn btn-outline btn-success">Lattest Project</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default Carosul;