import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import './Banar.css'
import Carosul from './Carosul';


const carouselData = [
    {
        id: 1,
        img:img1,
        prev:4,
        next:2
    },
    {
        id: 2,
        img:img2,
        prev:1,
        next:3
    },
    {
        id: 3,
        img:img3,
        prev:2,
        next:4
    },
    {
        id: 4,
        img:img4,
        prev:3,
        next:1
    }
]

const Banar = () => {
    return (
        <div className="carousel w-full">
          {
            carouselData.map(carosul => <Carosul slide={carosul}></Carosul>)
          }
        </div>
    );
};

export default Banar;