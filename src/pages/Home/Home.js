import React from 'react';
import About from './About/About';
import Banar from './Banar/Banar';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mt-12'>
          <Banar></Banar>
          <About></About>
          <Services></Services>
        </div>
    );
};

export default Home;