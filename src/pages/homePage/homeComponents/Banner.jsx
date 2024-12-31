import React from 'react';
import { IoBagHandleSharp } from 'react-icons/io5';

const Banner = () => {
    return (
        <div>
            <div className="container w-10/12 mx-auto">
                <div className="flex justify-between  bg-blue-100 aspect-[10/5]">
                    {/* text content side */}
                    <div className="w-1/2">
                        <div className="text-center flex items-center"><p className=" font-semibold flex items-center px-4 py-3 bg-white rounded-lg m-2 ">Explore the world!<IoBagHandleSharp />
                        </p>
                        </div>

                        <div className="mt-8">
                            <p className="text-6xl font-bold p-2"><span className="">Travel <span className="text-pink-700">top</span></span></p>
                            <p className="text-6xl font-bold p-2"><span className="text-pink-700">destination </span></p>
                            <p className="text-6xl font-bold p-2"><span className="">of the world </span></p>    
                        </div>

                        <div className="mt-12">
                            <p className="">Where advanture meet comport. We create</p>
                            <p className="">unforgettable travel experinece.</p>
                        </div>

                        <div className="mt-12 space-x-2">
                            <button className="px-6 py-2 bg-blue-400 rounded-lg"><a href="" className="">Get start</a></button>
                            <button className="px-6 py-2 bg-blue-400 rounded-lg"><a href="" className="">Watch demo</a></button>
                        </div>
                    </div>



                    <div className="">Image content</div>
                </div>
            </div>

        </div>
    );
};

export default Banner;