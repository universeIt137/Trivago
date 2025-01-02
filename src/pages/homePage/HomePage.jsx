import React from 'react';
import Banner from './homeComponents/Banner';
import Service from './homeComponents/Service';
import Destination from './homeComponents/Destination';
import Dream from './homeComponents/Dream';
import Experience from './homeComponents/Experience';
import TopDestination from './homeComponents/TopDestination';
import TourGuide from './homeComponents/TourGuide';
import NewsLetter from './homeComponents/NewsLetter';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Destination/>
            <Dream/>
            <TopDestination/>
            <Experience/>
            <TourGuide/>
            <NewsLetter/>
            
            
        </div>
    );
};

export default HomePage;