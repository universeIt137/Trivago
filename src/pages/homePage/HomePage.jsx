import React from 'react';
import Banner from './homeComponents/Banner';
import Service from './homeComponents/Service';
import Destination from './homeComponents/Destination';
import Dream from './homeComponents/Dream';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Destination/>
            <Dream/>
        </div>
    );
};

export default HomePage;