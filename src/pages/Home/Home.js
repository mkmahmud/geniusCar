import React from 'react';
import About from './About/About';
import Banar from './Banar/Banar';

const Home = () => {
    return (
        <div className='mt-12'>
          <Banar></Banar>
          <About></About>
        </div>
    );
};

export default Home;