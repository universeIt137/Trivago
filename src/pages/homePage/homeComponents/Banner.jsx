import React from 'react';
import { IoBagHandleSharp } from 'react-icons/io5';

const Banner = () => {
    return (
        <div>
            <div className="container max-w-7xl mx-auto">
                <div className="flex justify-between  bg-blue-100 aspect-[10/5]">
                    {/* text content side */}
                    <div className="">
                        <p className="font-semibold px-4 py-3 bg-white rounded-lg m-2 flex items-center">Explore the world!<IoBagHandleSharp />
                        </p>
                    </div>



                    <div className="">Image content</div>
                </div>
            </div>

        </div>
    );
};

export default Banner;