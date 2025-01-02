import React from 'react';

const Experience = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className="grid grid-cols-2 justify-center ">
                <div className="">
                    <p className="text-[#f85e9f] font-bold text-xl">Our Experience</p>
                    <p className="text-5xl font-bold  leading-[60px]">
                        Crafting <br /> Unforgettable Adventures
                    </p>
                    <p className="text-gray-500">
                        We excel in curating remarkable journeys, specializing in outdoor destinations around the globe. With a wealth of experience, we bring adventures to life and invite you to embark on your own. The call of nature awaits—begin your adventure today!
                    </p>
                    <div className="flex gap-20 my-10">
                        <div className="space-y-4">
                            <p className="text-[#f85e9f] text-5xl font-bold">1,000+</p>
                            <p>Outdoor <br /> destinations</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[#f85e9f] text-5xl font-bold">98%</p>
                            <p>Customer <br /> Satisfaction</p>
                        </div>


                        <div className="space-y-4">
                            <p className="text-[#f85e9f] text-5xl font-bold">15+</p>
                            <p>Years Of <br /> Experience</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute left-20">
                        <img className='w-10/12' src="https://res.cloudinary.com/dqmmlxnee/image/upload/v1735795206/Trivago/guvius948zavv9yuonds.png" alt="" />
                    </div>
                    <div className="absolute -left-10 top-10">

                        <img src="https://res.cloudinary.com/dqmmlxnee/image/upload/v1735795206/Trivago/w599sjvle1ubbqw0ol1r.png" alt="" />
                    </div>

                    <div className="absolute w-1/2 left-36 top-5">

                        <img src="https://res.cloudinary.com/dqmmlxnee/image/upload/v1735795207/Trivago/eiww6rzqqaydkdx4dvhf.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;