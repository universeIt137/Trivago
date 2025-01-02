import React from 'react';
import Banner from './homeComponents/Banner';
import Service from './homeComponents/Service';
import Destination from './homeComponents/Destination';
import Dream from './homeComponents/Dream';
import Experience from './homeComponents/Experience';
import TopDestination from './homeComponents/TopDestination';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Destination/>
            <Dream/>
            <TopDestination/>
            <Experience/>
            
            
            
        </div>
    );
};

export default HomePage;