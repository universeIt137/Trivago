import React from 'react';

const TourGuide = () => {
    return (
        <div className='flex'>
            <div className='mt-24 mx-auto'>
                <div className='flex mt-6'>
                    <div>
                        <p className='text-6xl font-bold'>Meet Our Expart Tour<br />Guides</p>
                        <p className='text-2xl'>Our journeys are enriched by our team of seasoned tour<br />guides. Our guides bring your adventures to life with their<br />expertise, passion</p>
                        <img className='w-[500px]' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735798127/Trivago/dream%20img/jaemyo3mfmqsig4t2ubs.png" alt="" />
                    </div>
                    <div className='mt-16 ml-20'>
                        < div className='flex '>
                            <div className="">
                                <img className='w-24 mt-4' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735799306/Trivago/dream%20img/czjxb2nejoeq1vpwzaf9.png" alt="" />
                            </div>
                            <div>
                                <p className='ml-8 text-xl font-bold'>Expertise</p>
                                <p className='mt-4 ml-8 text-xs'>Our guides are experts in their fields, ensuring in-<br />depth knowledge and insights into every destination</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className=''>
                                <img className='w-24 mt-20' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735799306/Trivago/dream%20img/pikhvfn630eec1gzax3y.png" alt="" />
                            </div>
                            <div className='mt-20'>
                                <p className='ml-8 text-xl font-bold'>Passion</p>
                                <p className='mt-2 ml-8 text-xs'>They are passionate about travel, culture, and<br />history, making your journey engaging and<br />captivating.</p>
                            </div>

                        </div>
                        <div className='flex'>
                            <div className=''>
                                <img className='w-24 mt-20' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735799306/Trivago/dream%20img/j4xmceqcjpyb2d6zay8a.png" alt="" />
                            </div>
                            <div className='mt-20'>
                                <p className='ml-8 text-xl font-bold'>Dedication</p>
                                <p className='mt-2 ml-8 text-xs'>Our guides are dedicated to providing exceptional<br/>service and ensuring your travel memories are truly<br/>unforgettable.</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default TourGuide;