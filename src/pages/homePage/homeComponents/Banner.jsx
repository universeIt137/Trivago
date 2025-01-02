import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoBagHandleSharp } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto my-20'>
            <div className="grid grid-cols-2 justify-center ">
                <div className="">
                    <p className="text-[#f85e9f] font-bold text-xl">Explore the world!</p>
                    <p className="text-5xl font-bold  leading-[60px]">
                        Travel <span className="text-[#f85e9f]">top <br /> destination</span> <br />
                        of the world
                    </p>
                    <p className="text-gray-500 w-3/4">
                        Where adventure meets comfort. We create unforgettable travel experiences   
                    </p>
                    <div className="flex gap-20 my-10">
                        <div className="">
                            <button className='bg-[#5d50c6] text-white py-3 px-6 rounded-[30px]'>Get Started</button>
                        </div>

                        <div className="">
                            <button className='border flex items-center gap-2 text-black py-3 px-6 rounded-[30px]'><FaPlay /> Watch Demo</button>
                        </div>

                        
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute left-20">
                        <img className='w-10/12' src="https://res.cloudinary.com/dqmmlxnee/image/upload/v1735795206/Trivago/guvius948zavv9yuonds.png" alt="" />
                    </div>
                    <div className="absolute -left-10 top-10">

                        <img className='' src="https://res.cloudinary.com/dqmmlxnee/image/upload/v1735795206/Trivago/w599sjvle1ubbqw0ol1r.png" alt="" />
                    </div>

                    <div className="absolute w-[73%] left-14 -top-24">

                        <img src="https://res.cloudinary.com/dqmmlxnee/image/upload/v1735797197/Trivago/nqxf7i1c5vkhhqfa7fx4.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;